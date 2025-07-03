export const projects = [
  {
    title: "varunj.dev",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Personal portfolio website with a terminal-inspired theme, custom animations, and responsive design.",
    repo: "https://github.com/varunkumarj/varunj.dev",
  },
  {
    title: "DevNotes",
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    description: "A markdown-based note-taking app for developers with code syntax highlighting, tags, and search functionality.",
    repo: "https://github.com/varunkumarj/devnotes",
  },
  {
    title: "API Toolkit",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB"],
    description: "A comprehensive toolkit for building scalable RESTful APIs with authentication, validation, and documentation.",
    repo: "https://github.com/varunkumarj/api-toolkit",
  },
  {
    title: "CodeReview AI",
    stack: ["Python", "FastAPI", "React", "TensorFlow"],
    description: "An AI-powered code review assistant that provides suggestions for code improvements and detects potential bugs.",
    repo: "https://github.com/varunkumarj/codereview-ai",
  },
  {
    title: "Terminal Chat",
    stack: ["React", "Socket.io", "Node.js", "Express"],
    description: "A terminal-themed real-time chat application with rooms, private messaging, and code sharing capabilities.",
    repo: "https://github.com/varunkumarj/terminal-chat",
  },
  {
    title: "UI Component Library",
    stack: ["React", "TypeScript", "Storybook", "Jest"],
    description: "A collection of reusable UI components with comprehensive documentation, testing, and theming support.",
    repo: "https://github.com/varunkumarj/ui-components",
  },
];
export type Project = typeof projects[number];
