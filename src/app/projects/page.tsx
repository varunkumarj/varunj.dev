import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-500">
          Projects
        </h1>
        <p className="text-lg mb-8 max-w-2xl text-gray-300">
          Here are some of the projects I've worked on. Each one represents a unique 
          challenge and learning opportunity in my journey as a developer.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
