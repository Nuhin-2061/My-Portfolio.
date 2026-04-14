interface ResumeToolsProps {
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
}

export function ResumeTools({ title, description, fileUrl, fileName }: ResumeToolsProps) {
  return (
    <section className="relative px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <article className="glass-panel rounded-[32px] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Resume</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">{description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-sky-200/30 bg-sky-300/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-sky-100 transition hover:border-sky-100/60 hover:bg-sky-300/20"
            >
              View Resume
            </a>

            <a
              href={fileUrl}
              download={fileName}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:border-white/35 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/40">
            Resume file path: public/resume/al-sadique-nuhin-resume.pdf
          </p>
        </article>
      </div>
    </section>
  );
}