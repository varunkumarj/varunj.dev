export const skills = [
  // Languages
  { name: "JavaScript", experience: 4, projects: 15, category: "language" },
  { name: "TypeScript", experience: 3, projects: 10, category: "language" },
  { name: "Python", experience: 3, projects: 6, category: "language" },
  { name: "Java", experience: 2, projects: 4, category: "language" },
  { name: "SQL", experience: 4, projects: 12, category: "language" },
  
  // Frontend
  { name: "React.js", experience: 4, projects: 12, category: "frontend" },
  { name: "Angular", experience: 3, projects: 8, category: "frontend" },
  { name: "Next.js", experience: 3, projects: 6, category: "frontend" },
  { name: "HTML5", experience: 4, projects: 15, category: "frontend" },
  { name: "CSS3", experience: 4, projects: 15, category: "frontend" },
  { name: "Tailwind CSS", experience: 3, projects: 6, category: "frontend" },
  
  // Backend
  { name: "Node.js", experience: 4, projects: 10, category: "backend" },
  { name: "Express.js", experience: 4, projects: 8, category: "backend" },
  { name: "LoopBack", experience: 3, projects: 5, category: "backend" },
  { name: "REST APIs", experience: 4, projects: 12, category: "backend" },
  { name: "JWT Auth", experience: 3, projects: 7, category: "backend" },
  
  // Cloud & DevOps
  { name: "AWS Lambda", experience: 3, projects: 6, category: "cloud" },
  { name: "API Gateway", experience: 3, projects: 5, category: "cloud" },
  { name: "DynamoDB", experience: 2, projects: 4, category: "cloud" },
  { name: "S3", experience: 3, projects: 7, category: "cloud" },
  { name: "Docker", experience: 2, projects: 5, category: "cloud" },
  { name: "CI/CD", experience: 3, projects: 8, category: "cloud" },
];

export type Skill = typeof skills[number];

export type SkillCategory = "language" | "frontend" | "backend" | "cloud";
