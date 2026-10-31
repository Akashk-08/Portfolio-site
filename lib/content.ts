import type { SimpleIcon } from "simple-icons";
import {
  siTypescript, siJavascript, siPython, siOpenjdk, siDotnet, siCplusplus, siOcaml,
  siReact, siNextdotjs, siNodedotjs, siExpress, siSpringboot, siTailwindcss, siGraphql, siSocketdotio, siClaude,
  siPostgresql, siMongodb, siPrisma, siDocker, siGitlab,
  siCypress, siJunit5, siGit, siGnubash, siUnity, siUnrealengine, siPandas,
} from "simple-icons";

export type Tech = { name: string; icon?: SimpleIcon; mono?: string };

export const highlights = [
  { value: 3.5, suffix: "+", decimals: 1, label: "Years shipping software" },
  { value: 5, suffix: "M", decimals: 0, label: "Cars running my voice assistant code" },
  { value: 50, suffix: "%", decimals: 0, label: "Fewer production defects after my test suites" },
  { value: 700, suffix: "+", decimals: 0, label: "Assets tracked in the CMMS I built" },
];

export const dailyStack: Tech[] = [
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Python", icon: siPython },
  { name: "Java", icon: siOpenjdk },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Docker", icon: siDocker },
  { name: "AWS", mono: "AWS" },
  { name: "Git", icon: siGit },
];

export type Role = { title: string; dates?: string; points: string[] };
export type Job = { hash: string; branch: string; company: string; start: string; startIso: string; end: string; endIso?: string; roles: Role[]; tools: string[] };

export const jobs: Job[] = [
  {
    hash: "7f3a9c2", branch: "HEAD → main",
    company: "Pulseworks LLC",
    start: "May 2025", startIso: "2025-05", end: "now",
    roles: [
      {
        title: "Simulator and VR Engineer, Intern",
        dates: "Jul 2026 to now",
        points: [
          "Designed and shipped a CMMS in React and TypeScript on AWS that manages 700+ assets and cut scheduling overlaps by 40%.",
          "Fixed simulator video quality problems through daily maintenance and hardware work, making the platform 25% more reliable.",
          "Ran 50+ simulation cycles a week and validated hardware sync, cutting guest facing mechanical faults by 25%.",
        ],
      },
      {
        title: "Simulator and VR Support Engineer, Intern",
        dates: "May 2025 to May 2026",
        points: [
          "Improved VR headset and motion hardware calibration accuracy by 15% by building a routine diagnostic checklist and running it before every session.",
          "Created a digital inventory of 800+ simulator assets, so the team could find parts and set up simulators 30% faster.",
          "Analyzed hardware performance logs to catch 50+ potential failures early, preventing synchronization issues across the GForce flight simulator platforms.",
        ],
      },
    ],
    tools: ["React", "TypeScript", "AWS", "VR hardware", "Networking"],
  },
  {
    hash: "c41e08b", branch: "release/automotive",
    company: "Cerence Inc.",
    start: "Jan 2022", startIso: "2022-01", end: "Jul 2024", endIso: "2024-07",
    roles: [
      {
        title: "Software Engineer Associate and Delivery Manager",
        points: [
          "Worked as a software engineer and delivery manager at the same time: writing production code while owning delivery for Toyota, Subaru and PSA Group, planning releases, keeping each client informed and making sure complex voice modules landed on time.",
          "Acted as the bridge between engineering, QA and client teams: turning client requests into clear scope, tracking risks and dependencies, and keeping releases moving across several programs at once.",
          "Architected a full stack voice assistant for PSA Group with Harman International. The code went out to a fleet of 5 million vehicles and features landed 75% faster.",
          "Ran the full SDLC for Toyota, Subaru and PSA Group voice modules and set up GitLab CI/CD, which sped up releases by 20%.",
          "Wrote self running JUnit and Mockito suites for unit and database checks, cutting production defects in half while meeting automotive safety standards.",
          "Built reusable TypeScript and JavaScript component libraries that cut debugging time by 30%.",
        ],
      },
    ],
    tools: ["Delivery management", "Release planning", "Client communication", "JavaScript", "TypeScript", "Java", "UI design", "ARTT testing", "JUnit", "Mockito", "GitLab CI/CD"],
  },
  {
    hash: "0a1d5e7", branch: "init",
    company: "GKTCS Innovations",
    start: "May 2021", startIso: "2021-05", end: "Aug 2021", endIso: "2021-08",
    roles: [
      {
        title: "Software Engineering Intern",
        points: [
          "Added asynchronous message queues and ran UI A/B tests. The changes that came out of them lifted user retention by 42%.",
          "Built models that spotted user trends, which shaped content and SEO work that grew organic traffic by 80%.",
        ],
      },
    ],
    tools: ["Message queues", "A/B testing", "SEO", "Python"],
  },
];

export type Project = {
  id: string; tag: string; title: string; art: "cmms" | "web" | "transit" | "squad" | "vr" | "sync";
  body: string; results: { big: string; small: string }[]; stack: string[]; note?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "cmms", tag: "Work · Pulseworks LLC", title: "Pulseworks CMMS", art: "cmms",
    body: "The maintenance system the Pulseworks team runs on. Work orders with auto routing by site and category, preventive maintenance schedules that open jobs on their own, an asset register with QR codes, parts inventory, and Pulseworks AI, which answers questions only from the organization's own records. One codebase ships to the web, Android and iOS, and keeps working offline on the phone apps.",
    results: [{ big: "700+", small: "assets tracked, 40% fewer scheduling overlaps" }, { big: "3 platforms", small: "web, Android and iOS from one codebase" }],
    stack: ["React 19", "TypeScript", "Express 5", "Prisma", "PostgreSQL on AWS RDS", "Capacitor", "S3", "Redis"],
    note: "Security audited: MFA, CSRF protection, row level security per organization and audit logs.",
  },
  {
    id: "web", tag: "Work · Pulseworks LLC", title: "Pulseworks website and review platform", art: "web",
    body: "The public Pulseworks site plus the system behind it. Every venue gets a printed review card with its own private QR code. Guests scan it and leave a review in seconds, and the marketing team picks which ones go live from an admin console protected by an authenticator app. Server rendered with no front end framework, so it stays fast and easy to run.",
    results: [{ big: "99 to 100", small: "Lighthouse scores across the board" }, { big: "5", small: "runtime dependencies in total" }],
    stack: ["Node.js 24", "Express 5", "PostgreSQL", "Docker", "Caddy", "QR codes"],
  },
  {
    id: "vr", tag: "Personal · WebXR", title: "VR Geography", art: "vr",
    body: "A geography explorer you can step into with a VR headset. Look at a landmark on a spinning 3D globe to select it, read floating fact panels, then zoom straight down into a 360 degree panorama of the place. A scoreboard tracks every location you discover.",
    results: [{ big: "Gaze to select", small: "no controllers needed in VR" }, { big: "360°", small: "panoramas for every landmark" }],
    stack: ["React Three Fiber", "Three.js", "WebXR", "Pannellum", "TypeScript"],
  },
  {
    id: "transit", tag: "Stevens · Team project", title: "NJNavigator transit assistant", art: "transit",
    body: "Ask a commute question in plain English and get a real time trip plan across the MTA subway, PATH and NJ Transit. An AI agent calls nine tools through an MCP server: schedule search over GTFS data, live delay and arrival feeds, service alerts, geocoding and a RAG knowledge base.",
    results: [{ big: "9 MCP tools", small: "schedules, live feeds, alerts and RAG" }, { big: "2 minute", small: "departure time accuracy" }],
    stack: ["Python", "smolagents", "FastMCP", "ChromaDB", "GTFS Realtime", "SQLite"],
  },
  {
    id: "squad", tag: "Stevens · Web programming", title: "FindMySquad", art: "squad",
    body: "A teammate finder for sports, fitness and gaming. You find people near you on a map, chat in real time, and organize tournaments with team registration and scheduling that validates itself.",
    results: [{ big: "200+", small: "concurrent users supported" }, { big: "Under 300ms", small: "backend latency" }],
    stack: ["Node.js", "Socket.IO", "Express.js", "MongoDB", "Leaflet.js"],
  },
  {
    id: "sync", tag: "Personal · Desktop app", title: "C2 Sync", art: "sync",
    body: "A Mac desktop app that pulls every upcoming assignment and event from Canvas, the Stevens course platform, and writes them into a Canvas calendar in the macOS Calendar app. Your API token is stored locally and never leaves the machine.",
    results: [{ big: "One click", small: "from Canvas to Apple Calendar" }, { big: "Local only", small: "credentials stay on your Mac" }],
    stack: ["Electron", "React", "TypeScript", "Canvas API", "AppleScript"],
  },
];

export const smallBuilds = [
  { title: "To Do App", repo: "To_DO_APP", body: "A clean, typed task list built in React and TypeScript. Add a task, tick it off, or clear it, with state kept predictable through small reusable components.", href: "https://github.com/Akashk-08/To_DO_APP", stack: [{ name: "React", icon: siReact }, { name: "TypeScript", icon: siTypescript }] as Tech[], tasks: ["Add a task", "Mark it complete", "Delete when done"] },
];

export const learning = ["Motion platforms and actuators", "VR headset tracking and calibration", "Simulator networking", "Video and display pipelines", "Hardware diagnostics"];

export const skillGroups: { title: string; items: Tech[] }[] = [
  { title: "Languages", items: [
    { name: "TypeScript", icon: siTypescript }, { name: "JavaScript", icon: siJavascript }, { name: "Python", icon: siPython },
    { name: "Java", icon: siOpenjdk }, { name: "C#", mono: "C#" }, { name: "ASP.NET", icon: siDotnet },
    { name: "C++", icon: siCplusplus }, { name: "OCaml", icon: siOcaml }, { name: "SQL", mono: "SQL" },
  ] },
  { title: "Web, mobile and AI", items: [
    { name: "React", icon: siReact }, { name: "React Native", icon: siReact }, { name: "Next.js", icon: siNextdotjs },
    { name: "Node.js", icon: siNodedotjs }, { name: "Express.js", icon: siExpress }, { name: "Spring Boot", icon: siSpringboot },
    { name: "Tailwind CSS", icon: siTailwindcss }, { name: "GraphQL", icon: siGraphql }, { name: "REST APIs", mono: "API" },
    { name: "Socket.IO", icon: siSocketdotio }, { name: "Claude API and LLMs", icon: siClaude },
  ] },
  { title: "Data and cloud", items: [
    { name: "AWS", mono: "AWS" }, { name: "EC2, S3, RDS, Serverless", mono: "EC2" }, { name: "PostgreSQL", icon: siPostgresql },
    { name: "MongoDB", icon: siMongodb }, { name: "Prisma ORM", icon: siPrisma }, { name: "Docker", icon: siDocker },
    { name: "GitLab CI/CD", icon: siGitlab },
  ] },
  { title: "Testing and tools", items: [
    { name: "Cypress", icon: siCypress }, { name: "JUnit", icon: siJunit5 }, { name: "Mockito", mono: "Mo" },
    { name: "Git", icon: siGit }, { name: "Unix and Bash", icon: siGnubash }, { name: "Unity", icon: siUnity },
    { name: "Unreal Engine", icon: siUnrealengine }, { name: "Pandas", icon: siPandas }, { name: "Power BI", mono: "BI" },
  ] },
];

export const steps = [
  { n: "01", key: "plan", title: "Understand the problem", log: "requirements mapped", body: "I learn the job before I automate it. At Pulseworks I did the hardware maintenance myself for a year before building the CMMS that now tracks it." },
  { n: "02", key: "build", title: "Build in small pieces", log: "modules compiled", body: "Typed, modular components and APIs that are easy to review and easy to reuse. That habit cut debugging time by 30% at Cerence." },
  { n: "03", key: "test", title: "Prove it works", log: "all checks passed", body: "Unit tests, integration checks and security reviews on every change. My JUnit and Mockito suites at Cerence cut production defects in half." },
  { n: "04", key: "ship", title: "Ship and measure", log: "deployed to production", body: "CI/CD to production, then real numbers after release. Shipping starts the feedback loop instead of ending it." },
];

export const education = [
  { school: "Stevens Institute of Technology", degree: "Master of Science, Computer Science", meta: "Hoboken, NJ · 2024 to 2026" },
  { school: "MIT World Peace University", degree: "Master of Computer Applications", meta: "Pune, India · 2020 to 2022" },
  { school: "Mangalvedhekar Institute of Technology", degree: "Bachelor of Computer Applications", meta: "Solapur, India · 2017 to 2020" },
];
