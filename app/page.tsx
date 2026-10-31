import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import CopyEmail from "@/components/CopyEmail";
import ProjectArt from "@/components/ProjectArt";
import Experience from "@/components/Experience";
import TiltCard from "@/components/TiltCard";
import SkillTabs from "@/components/SkillTabs";
import Pipeline from "@/components/Pipeline";
import CommandPalette from "@/components/CommandPalette";
import SmallBuild from "@/components/SmallBuild";
import CleanAnchors from "@/components/CleanAnchors";
import { education, highlights, learning, projects, smallBuilds } from "@/lib/content";
import { EMAIL, GITHUB, LINKEDIN, RESUME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akash Kulkarni",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/img/akash-portrait.jpg`,
  jobTitle: "Full Stack Software Engineer",
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Smyrna", addressRegion: "GA", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Stevens Institute of Technology" },
    { "@type": "CollegeOrUniversity", name: "MIT World Peace University" },
  ],
  worksFor: { "@type": "Organization", name: "Pulseworks LLC" },
  knowsAbout: ["React", "TypeScript", "Next.js", "Node.js", "AWS", "Python", "Java", "LLMs", "CI/CD", "PostgreSQL"],
  sameAs: [LINKEDIN, GITHUB],
};

const newTab = <span className="sr-only"> (opens in a new tab)</span>;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <Hero />

        <section className="wrap numbers" aria-label="Highlights">
          <dl className="numbers-grid">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.label}</dt>
                <dd><CountUp value={h.value} decimals={h.decimals} suffix={h.suffix} /></dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section wrap" id="work" aria-labelledby="work-title">
          <Reveal as="div" className="section-head">
            <p className="kicker">01 / Experience</p>
            <h2 id="work-title">Where I have worked</h2>
            <p className="section-intro">Three and a half years across automotive voice tech, a startup, and a VR simulation company. I like work where the software touches something physical.</p>
          </Reveal>
          <Experience />
        </section>

        <section className="section wrap" id="projects" aria-labelledby="projects-title">
          <Reveal className="section-head">
            <p className="kicker">02 / Projects</p>
            <h2 id="projects-title">Things I have built</h2>
            <p className="section-intro">The first two run the Pulseworks business every day. The rest I built to learn something new, from WebXR to AI agents to desktop apps.</p>
          </Reveal>
          <div className="projects">
            {projects.map((p, i) => (
              <TiltCard className="project" key={p.id} delay={(i % 2) * 0.08} aria-labelledby={`${p.id}-title`}>
                <ProjectArt kind={p.art} />
                <div className="project-body">
                  <p className="project-tag">{p.tag}</p>
                  <h3 id={`${p.id}-title`}>{p.title}</h3>
                  <p>{p.body}</p>
                  <ul className="project-results">
                    {p.results.map((r) => <li key={r.big}><strong>{r.big}</strong> {r.small}</li>)}
                  </ul>
                  <ul className="chips" aria-label="Built with">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                  {p.note && <p className="project-note">{p.note}</p>}
                  {p.links && (
                    <p className="project-links">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}<span className="sr-only"> for {p.title} (opens in a new tab)</span> <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="small-builds">
            <p className="small-label"><span aria-hidden="true">~/</span>smaller_builds</p>
            {smallBuilds.map((b) => <SmallBuild key={b.href} build={b} />)}
          </div>
          <p className="more-link"><a href={GITHUB} target="_blank" rel="noopener noreferrer">More of my code on GitHub{newTab} <span aria-hidden="true">↗</span></a></p>
        </section>

        <section className="section wrap" id="skills" aria-labelledby="skills-title">
          <Reveal className="section-head">
            <p className="kicker">03 / Skills</p>
            <h2 id="skills-title">What I work with</h2>
            <p className="section-intro">Everything here I have used to ship real work, in production at Cerence and Pulseworks LLC or in full projects at Stevens.</p>
          </Reveal>
          <SkillTabs />
        </section>

        <section className="section wrap" id="approach" aria-labelledby="approach-title">
          <Reveal className="section-head">
            <p className="kicker">04 / Approach</p>
            <h2 id="approach-title">How I work</h2>
            <p className="section-intro">Being a developer and a delivery manager taught me that good code is only half the job. Here is the pipeline every feature I build goes through. Scroll to run it.</p>
          </Reveal>
          <Pipeline />
        </section>

        <section className="section wrap" id="about" aria-labelledby="about-title">
          <div className="about">
            <div className="about-side">
              <Reveal as="figure" className="about-photo">
                <Image src="/img/akash-graduation.jpg" width={600} height={800} sizes="(min-width: 881px) 360px, 320px"
                  alt="Akash Kulkarni in his graduation cap and gown on the Hudson River waterfront, with the Manhattan skyline behind him" />
              </Reveal>
              <Reveal as="figure" className="code-card" delay={0.1} aria-label="A short profile of Akash written as a TypeScript object">
                <div className="code-bar" aria-hidden="true"><span /><span /><span /><p>akash.ts</p></div>
                <pre><code>
<span className="c-k">const</span> akash = {"{"}{"\n"}
{"  "}role: <span className="c-s">&quot;Full Stack Engineer&quot;</span>,{"\n"}
{"  "}based: <span className="c-s">&quot;Smyrna, GA&quot;</span>,{"\n"}
{"  "}stack: [<span className="c-s">&quot;React&quot;</span>, <span className="c-s">&quot;Next.js&quot;</span>, <span className="c-s">&quot;TypeScript&quot;</span>, <span className="c-s">&quot;AWS&quot;</span>],{"\n"}
{"  "}shipped: <span className="c-s">&quot;voice AI in 5M cars&quot;</span>,{"\n"}
{"  "}openToWork: <span className="c-k">true</span>,{"\n"}
{"  "}relocate: <span className="c-k">true</span>,{"\n"}
{"}"};</code></pre>
              </Reveal>
            </div>
            <div className="about-text">
              <Reveal>
                <p className="kicker">05 / About</p>
                <h2 id="about-title">A bit about me</h2>
                <p>I started out writing code for car voice assistants at Cerence. Saying &quot;navigate home&quot; while driving sounds simple until you are the one making it work for Toyota, Subaru and Peugeot at the same time. That job taught me to care about tests, about release pipelines, and about the people waiting on what I ship. There I worked as both a software engineer and a delivery manager. Owning releases for several automotive clients showed me that I enjoy the people side of engineering as much as the code: planning the work, clearing blockers for the team and keeping clients confident in what we ship.</p>
                <p>I then moved to the US for a master&apos;s in Computer Science at Stevens, and joined Pulseworks LLC, where I keep VR flight simulators healthy and build the software the team uses to do it.</p>
                <p>I am also learning the hardware side. At Pulseworks I help build and maintain full motion VR flight simulators, which means getting hands on with motion platforms, headset tracking and calibration, the network that keeps every pod in sync, and the video pipeline that feeds the displays. Knowing how the machine works makes me write better software for it.</p>
                <p>What I want next is a full time engineering role on a team that ships real products, where I can own features from the database up to the UI. Over time I want to grow into engineering leadership, combining hands on technical work with delivery and team management.</p>
              </Reveal>
              <Reveal>
                <h3 className="edu-title">Currently learning</h3>
                <ul className="chips learning" aria-label="Currently learning">{learning.map((l) => <li key={l}>{l}</li>)}</ul>
              </Reveal>
              <Reveal>
                <h3 className="edu-title">Education</h3>
                <ul className="edu">
                  {education.map((e) => (
                    <li key={e.school}>
                      <p className="edu-school">{e.school}</p>
                      <p className="edu-degree">{e.degree}</p>
                      <p className="edu-dates">{e.meta}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section wrap contact" id="contact" aria-labelledby="contact-title">
          <Reveal>
            <p className="kicker">06 / Contact</p>
            <p className="prompt-line" aria-hidden="true"><span className="t-prompt">$</span> mail akash<span className="cursor" /></p>
            <h2 id="contact-title">Let&apos;s build something.</h2>
            <p className="section-intro">I am looking for full time software engineering roles. If you are hiring, or you just want to talk shop, my inbox is open and I usually reply within a day.</p>
          </Reveal>
          <Reveal className="contact-email">
            <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <CopyEmail email={EMAIL} />
          </Reveal>
          <ul className="contact-links">
            {[
              { href: LINKEDIN, t: "LinkedIn", s: "Connect with me", me: true },
              { href: GITHUB, t: "GitHub", s: "Read my code", me: true },
              { href: RESUME, t: "Resume", s: "PDF, one page", me: false },
            ].map((c, i) => (
              <Reveal as="li" key={c.t} delay={i * 0.08}>
                <a href={c.href} target="_blank" rel={`noopener noreferrer${c.me ? " me" : ""}`}>
                  <span>{c.t}</span><span className="cl-sub">{c.s}</span>{newTab}
                </a>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© 2026 Akash Kulkarni</p>
          <p className="footer-hint">Press <kbd>⌘K</kbd> or <kbd>Ctrl K</kbd> to jump anywhere</p>
          <a href="#top" className="to-top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
      <CommandPalette />
      <CleanAnchors />
    </>
  );
}
