import Link from "next/link";

interface ProjectCardProps {
  title: string;
  stack: string[];
  description: string;
  repo: string;
}

export default function ProjectCard({ title, stack, description, repo }: ProjectCardProps) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 transition-transform hover:scale-[1.02] hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-cyan-300 mb-2">{stack.join(", ")}</p>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <Link href={repo} className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>
    </div>
  );
}
