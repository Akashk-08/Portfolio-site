"use client";
import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { jobs } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <div className="timeline-wrap">
      <div className="rail" aria-hidden="true"><m.div className="rail-fill" style={{ scaleY }} /></div>
      <ol className="timeline" ref={ref}>
        {jobs.map((job, ji) => <JobCard key={job.company} job={job} index={ji} />)}
      </ol>
    </div>
  );
}

function JobCard({ job, index }: { job: (typeof jobs)[number]; index: number }) {
  const current = job.end === "now";

  return (
    <m.li className="job"
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }} transition={{ duration: 0.7, ease }}>
      <m.span className={`job-node${current ? " is-current" : ""}`} aria-hidden="true"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 18 }} />
      <div className="job-meta">
        <p className="commit" aria-hidden="true"><span className="commit-hash">{job.hash}</span><span className={`branch${current ? " is-head" : ""}`}>{job.branch}</span></p>
        <p className="job-dates">
          <time dateTime={job.startIso}>{job.start}</time> to {job.endIso ? <time dateTime={job.endIso}>{job.end}</time> : job.end}
        </p>
        {current && <p className="current-badge"><span className="pulse" aria-hidden="true" />Current</p>}
      </div>
      <m.div className="job-body" whileHover={{ y: -3 }} transition={{ duration: 0.25 }}>
        <h3 className="job-company">{job.company}</h3>
        {job.roles.map((r) => (
          <div className="job-role" key={r.title}>
            <p className="role-title">{r.title}{r.dates && <span className="role-dates">{r.dates}</span>}</p>
            <ul>
              {r.points.map((p, i) => (
                <m.li key={p} initial={{ x: -12 }} whileInView={{ x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease }}>{p}</m.li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="chips" aria-label="Tools used">{job.tools.map((t) => <li key={t}>{t}</li>)}</ul>
      </m.div>
    </m.li>
  );
}
