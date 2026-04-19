"use client";

import { useEffect, useMemo, useState } from "react";

const sectionItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "connect", label: "Contact" }
] as const;

export function StickyNav() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const sectionIds = useMemo(() => sectionItems.map((item) => item.id), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    let rafId: number | null = null;

    const updateActiveSection = () => {
      const markerY = window.scrollY + window.innerHeight * 0.32;
      let nextActive = elements[0].id;

      for (const element of elements) {
        if (element.offsetTop <= markerY) {
          nextActive = element.id;
        } else {
          break;
        }
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
      rafId = null;
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [sectionIds]);

  return (
    <nav className="fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-40 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/35 px-2 py-2 backdrop-blur-xl">
      <div className="max-w-[calc(100vw-0.75rem)] overflow-x-auto sm:max-w-[calc(100vw-2rem)]">
        <ul className="flex min-w-max items-center gap-1.5 sm:gap-2">
        {sectionItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex rounded-xl px-3 py-2 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 sm:text-xs ${
                  isActive
                    ? "border border-sky-300/30 bg-sky-300/20 text-sky-100"
                    : "border border-transparent bg-white/0 text-white/65 hover:border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
}
