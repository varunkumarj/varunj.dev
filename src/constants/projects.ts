export const projects = [
  {
    title: "Portfolio Website",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    description: "Personal site showcasing my work and blog posts.",
    repo: "https://github.com/example/portfolio",
  },
  {
    title: "API Boilerplate",
    stack: ["Node.js", "Express", "TypeScript"],
    description: "Starter template for building RESTful APIs.",
    repo: "https://github.com/example/api-boilerplate",
  },
  {
    title: "Realtime Chat",
    stack: ["React", "Socket.io", "Node.js"],
    description: "A simple realtime chat application.",
    repo: "https://github.com/example/realtime-chat",
  },
];
export type Project = typeof projects[number];
