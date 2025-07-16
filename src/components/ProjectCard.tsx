"use client";

import Link from "next/link";
import Card from "./Card";

interface ProjectCardProps {
  title: string;
  stack: string[];
  description: string;
  repo: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, stack, description, repo, liveUrl }: ProjectCardProps) {
  return (
    <Card 
      variant="primary" 
      className="transition-transform hover:scale-[1.02] hover:shadow-lg flex flex-col h-full"
    >
      {liveUrl && (
        <div className="mb-4 overflow-hidden rounded-md bg-gray-800 border border-gray-700">
          <div className="relative pb-[56.25%]">
            <img 
              src={`/images/${title.toLowerCase().replace(/\s+/g, '-')}.png`} 
              alt={`${title} preview`}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/project-placeholder.png';
              }}
            />
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-primary-100">{title}</h3>
      <p className="text-sm text-primary-400 mb-2">{stack.join(", ")}</p>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        <Link 
          href={repo} 
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-md transition-colors text-sm font-medium" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </Link>
        {liveUrl && (
          <Link 
            href={liveUrl} 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded-md transition-colors text-sm font-medium" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </Link>
        )}
      </div>
    </Card>
  );
}
