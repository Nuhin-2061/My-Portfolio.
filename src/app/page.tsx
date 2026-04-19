import { Projects } from "@/components/Projects";
import { ResumeTools } from "@/components/ResumeTools";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { StickyNav } from "@/components/StickyNav";
import {
  aboutParagraphs,
  achievements,
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

      <section id="connect" className="relative scroll-mt-24 px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Goals & Vision</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Building toward cloud-first engineering.</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/72 sm:text-[15px]">
              {goals.map((goal) => (
                <p key={goal} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                  <span>{goal}</span>
                </p>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[32px] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Connect</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Open to opportunities, learning, and collaboration.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              I’m always open to conversations around software development, cloud computing, and meaningful project collaboration.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-white/72 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/10"
                >
                  <span className="block text-xs uppercase tracking-[0.4em] text-white/40">{link.label}</span>
                  <span className="mt-3 block break-all text-base text-white">{link.href.replace(/^https?:\/\//, "")}</span>
                </a>
              ))}
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