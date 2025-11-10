'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-card-bg backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all 
    duration-300 overflow-hidden border border-card-border hover:border-royal/40 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-royal-dark/20 flex items-center justify-center">
          {/* Placeholder for project image */}
          <div className="text-center text-royal/80">
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium">{project.title}</p>
          </div>
        </div>
        
        {/* Overlay with links - shows on hover */}
        <div className="absolute inset-0 bg-royal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-royal font-semibold rounded-lg hover:bg-cream transition-colors"
          >
            Live Demo
          </Link>
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-royal transition-colors"
          >
            View Code
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-white group-hover:text-royal transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-400 font-medium">
              {new Date(project.date).getFullYear()}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {project.short}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-300">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-royal/20 text-royal border border-royal/30 text-sm font-medium rounded-full hover:bg-royal/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-card-border">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-royal transition-colors"
                aria-label="View source code"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-royal transition-colors"
                aria-label="View live demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            
            {project.hasDetailPage && (
              <Link
                href={`/projects/${project.slug}`}
                className="text-royal hover:text-royal-dark font-semibold text-sm flex items-center space-x-1 transition-colors"
              >
                <span>Case Study</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;