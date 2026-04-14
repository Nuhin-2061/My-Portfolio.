"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Overlay } from "./Overlay";

interface ScrollyCanvasProps {
  frames: string[];
}

export function ScrollyCanvas({ frames }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const smoothingRafRef = useRef<number | null>(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();
  const heroProgress = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  useEffect(() => {
    let cancelled = false;
    const images = frames.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });

    let loadedCount = 0;
    const total = images.length;
    const minimumToStart = Math.max(1, Math.min(total, 20));

    const markLoaded = () => {
      loadedCount += 1;
      if (cancelled) {
        return;
      }

      setLoadProgress(Math.round((loadedCount / total) * 100));

      if (loadedCount >= minimumToStart) {
        imagesRef.current = images;
        setLoaded(true);
      }

      if (loadedCount >= total) {
        imagesRef.current = images;
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        markLoaded();
        return;
      }

      image.onload = markLoaded;
      image.onerror = markLoaded;
    });

    return () => {
      cancelled = true;
    };
  }, [frames]);

  useEffect(() => {
    if (!loaded || frames.length === 0) {
      if (smoothingRafRef.current !== null) {
        cancelAnimationFrame(smoothingRafRef.current);
        smoothingRafRef.current = null;
      }
      return;
    }

    const animate = () => {
      const next = currentFrameRef.current + (targetFrameRef.current - currentFrameRef.current) * 0.18;
      currentFrameRef.current = next;
      const rounded = Math.round(next);

      setFrameIndex((prev) => (prev === rounded ? prev : rounded));
      smoothingRafRef.current = requestAnimationFrame(animate);
    };

    smoothingRafRef.current = requestAnimationFrame(animate);

    return () => {
      if (smoothingRafRef.current !== null) {
        cancelAnimationFrame(smoothingRafRef.current);
      }
      smoothingRafRef.current = null;
    };
  }, [loaded, frames.length]);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      const parent = canvas?.parentElement;

      if (!canvas || !parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      setCanvasSize({ width: rect.width, height: rect.height });
    };

    updateCanvasSize();

    const parent = canvasRef.current?.parentElement;
    const observer = parent ? new ResizeObserver(updateCanvasSize) : null;

    if (parent && observer) {
      observer.observe(parent);
    }

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const mappedFrame = latest * (frames.length - 1);
    const bounded = Math.min(frames.length - 1, Math.max(0, mappedFrame));
    targetFrameRef.current = bounded;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const currentImage = imagesRef.current[frameIndex];

    const getRenderableImage = () => {
      if (currentImage?.complete && currentImage.naturalWidth > 0) {
        return currentImage;
      }

      for (let i = frameIndex - 1; i >= 0; i -= 1) {
        const image = imagesRef.current[i];
        if (image?.complete && image.naturalWidth > 0) {
          return image;
        }
      }

      for (let i = frameIndex + 1; i < imagesRef.current.length; i += 1) {
        const image = imagesRef.current[i];
        if (image?.complete && image.naturalWidth > 0) {
          return image;
        }
      }

      return null;
    };

    const image = getRenderableImage();

    if (!canvas || !image || !loaded || !canvasSize.width || !canvasSize.height) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(canvasSize.width * dpr);
    canvas.height = Math.floor(canvasSize.height * dpr);
    canvas.style.width = `${canvasSize.width}px`;
    canvas.style.height = `${canvasSize.height}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);

    const scale = Math.max(canvasSize.width / image.naturalWidth, canvasSize.height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const offsetX = (canvasSize.width - drawWidth) / 2;
    const offsetY = (canvasSize.height - drawHeight) / 2;

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }, [canvasSize, frameIndex, loaded]);

  return (
    <section className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.2),transparent_44%),linear-gradient(180deg,rgba(4,8,18,0.32),rgba(4,8,18,0.68))]" />

      <Overlay scrollYProgress={heroProgress} />

      <div className="absolute inset-x-0 top-6 z-20 flex justify-between px-6 sm:px-10 lg:px-14">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60 backdrop-blur-md">
          Portfolio / Scrollytelling
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60 backdrop-blur-md">
          Top to Bottom Scroll Animation
        </div>
      </div>

      {!loaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#121212] text-sm uppercase tracking-[0.45em] text-white/60">
          Loading sequence {loadProgress}%
        </div>
      )}
    </section>
  );
}