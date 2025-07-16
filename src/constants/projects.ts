export const projects = [
  {
    title: "Dozyo",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    description: "Tiny steps. Real progress: A Task Management and Microtasking application focused on incremental improvement.",
    repo: "https://github.com/varunkumarj/dozyo",
    liveUrl: "https://dozyo.varunj.dev",
  },
  {
    title: "varunj.dev",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "My personal portfolio website with a terminal-inspired theme, custom animations, and responsive design.",
    repo: "https://github.com/varunkumarj/varunj.dev",
    liveUrl: "https://varunj.dev",
  },
];
export type Project = typeof projects[number];
