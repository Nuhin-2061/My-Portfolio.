import { Projects } from "@/components/Projects";
import { ResumeTools } from "@/components/ResumeTools";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { StickyNav } from "@/components/StickyNav";
import {
  aboutParagraphs,
  achievements,
  contact,
  education,
  goals,
  hero,
  profile,
  resume,
  sequenceFrames,
  skills,
  snapshotPoints,
  socialLinks,
  stats
} from "@/lib/site-content";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative overflow-hidden bg-[#0b0f17] text-white">
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
      <StickyNav />

      <ScrollyCanvas frames={sequenceFrames} />

      <div className="relative z-10 pt-[100svh] sm:pt-[100vh]">

      <section id="home" className="relative scroll-mt-24 px-6 pb-10 pt-12 sm:px-10 lg:px-14 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <article className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Intro</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{hero.headline}</h1>
            <p className="mt-4 text-base text-sky-100/90 sm:text-lg">{hero.tagline}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{hero.summary}</p>
          </article>
        </div>
      </section>

      <section className="relative px-6 pb-10 pt-8 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-5">
                <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-24 px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">About Me</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{hero.headline}</h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">{hero.summary}</p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/72 sm:text-[15px]">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[32px] p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Profile</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
                <div>
                  <span className="block text-xs uppercase tracking-[0.35em] text-white/40">Field</span>
                  <p className="mt-2 text-base text-white">{profile.field}</p>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.35em] text-white/40">University</span>
                  <p className="mt-2 text-base text-white">{profile.university}</p>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.35em] text-white/40">Current Role</span>
                  <p className="mt-2 text-base text-white">{profile.currentRole}</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Snapshot</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/72">
                {snapshotPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="relative scroll-mt-24 px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Education</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Academic foundation and achievements.</h2>
            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              A quick overview of my degree journey and milestones that shaped my technical growth.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Education</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{education.degree}</h2>
            <p className="mt-4 text-lg text-white/72">{education.institution}</p>
            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-[15px]">
              My academic path focuses on computer science fundamentals, engineering discipline, and the kind of logical thinking that supports long-term technical growth.
            </p>
          </article>

          <article className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Achievements</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/72 sm:text-[15px]">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          </div>
        </div>
      </section>

      <section id="skills" className="relative scroll-mt-24 px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technical depth, organized clearly.</h2>
            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              A structured overview of the subjects, tools, and strengths that shape my engineering foundation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skillGroup) => (
              <article key={skillGroup.title} className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-white">{skillGroup.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative scroll-mt-24">
        <Projects />
      </section>

      <section id="resume" className="relative scroll-mt-24">
        <ResumeTools
          title={resume.title}
          description={resume.description}
          fileUrl={resume.fileUrl}
          fileName={resume.fileName}
        />
      </section>

      <section id="connect" className="relative scroll-mt-24 px-6 py-12 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="glass-panel rounded-[32px] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Goals & Vision</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Building toward cloud-first engineering.</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/72 sm:text-[15px]">
                {goals.map((goal) => (
                  <p key={goal} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                    <span>{goal}</span>
                  </p>
                ))}
              </div>
            </article>

            <article className="glass-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,234,212,0.14),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.16),transparent_48%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Connect</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Open to opportunities, learning, and collaboration.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  I’m always open to conversations around software development, cloud computing, and meaningful project collaboration.
                </p>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">{contact.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{contact.headline}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Your message will be sent to <span className="text-white">{contact.email}</span>.
                  </p>

                  <form className="mt-5 grid gap-3 sm:grid-cols-2" action="https://formspree.io/f/xqewvbaw" method="POST">
                    <div className="sm:col-span-1">
                      <label className="text-xs uppercase tracking-[0.35em] text-white/50">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="text-xs uppercase tracking-[0.35em] text-white/50">Your Gmail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs uppercase tracking-[0.35em] text-white/50">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs uppercase tracking-[0.35em] text-white/50">Your message</label>
                      <textarea
                        name="message"
                        placeholder="Write your message here."
                        rows={3}
                        className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      />
                    </div>
                    <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{contact.helper}</p>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 shadow-[0_0_18px_rgba(94,234,212,0.35)] transition hover:shadow-[0_0_26px_rgba(251,113,133,0.4)]"
                      >
                        {contact.cta}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/70 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/10"
                    >
                      {link.label === "LinkedIn" && (
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-white/70">
                          <path
                            fill="currentColor"
                            d="M6.94 7.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm-1.2 9.9V9.6h2.4v7.8h-2.4ZM17.6 17.4v-4.23c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23v4.31h-2.4V9.6h2.3v1.06h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.67v4.31h-2.4Z"
                          />
                        </svg>
                      )}
                      {link.label === "GitHub" && (
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-white/70">
                          <path
                            fill="currentColor"
                            d="M12 2.1a10 10 0 0 0-3.16 19.49c.5.1.69-.22.69-.49v-1.72c-2.8.61-3.39-1.2-3.39-1.2-.46-1.17-1.13-1.49-1.13-1.49-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.24-.26-4.6-1.12-4.6-5a3.9 3.9 0 0 1 1.04-2.7 3.62 3.62 0 0 1 .1-2.67s.85-.27 2.78 1.03a9.6 9.6 0 0 1 5.06 0c1.93-1.3 2.78-1.03 2.78-1.03.37.92.4 1.93.1 2.67a3.9 3.9 0 0 1 1.04 2.7c0 3.9-2.36 4.74-4.61 4.99.36.31.68.93.68 1.88v2.79c0 .27.18.6.7.49A10 10 0 0 0 12 2.1Z"
                          />
                        </svg>
                      )}
                      {link.label === "Facebook" && (
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-white/70">
                          <path
                            fill="currentColor"
                            d="M13.1 21v-7.2h2.4l.36-2.8H13.1V9.2c0-.8.22-1.35 1.38-1.35h1.48V5.34c-.26-.03-1.15-.1-2.18-.1-2.16 0-3.64 1.32-3.64 3.75v2.1H7.6v2.8h2.54V21h2.96Z"
                          />
                        </svg>
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
        </div>
      </section>

      <footer className="relative px-6 pb-10 pt-6 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {hero.headline}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-white/50">
            <a href="#home" className="transition-colors hover:text-sky-200">Home</a>
            <a href="#about" className="transition-colors hover:text-sky-200">About</a>
            <a href="#skills" className="transition-colors hover:text-sky-200">Skills</a>
            <a href="#projects" className="transition-colors hover:text-sky-200">Projects</a>
            <a href="#connect" className="transition-colors hover:text-sky-200">Connect</a>
          </nav>
        </div>
      </footer>
      </div>
    </main>
  );
}