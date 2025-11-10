import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug, getProjectSlugs, formatDate } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.short,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.short,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project || !project.hasDetailPage) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-royal to-royal-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <Link
              href="/#projects"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.short}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDate(project.date)}</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Project Image */}
          <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-royal/10 to-royal-dark/10 flex items-center justify-center">
              <div className="text-center text-royal/60">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-medium">{project.title} Screenshot</p>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <section className="space-y-8">
            <h2 className="font-display font-bold text-3xl text-text-primary">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.long}
            </p>
          </section>

          {/* Tech Stack */}
          <section className="space-y-8">
            <h2 className="font-display font-bold text-3xl text-text-primary">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.tech.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-cream rounded-lg border border-royal/20 text-center"
                >
                  <span className="font-semibold text-royal">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Metrics */}
          <section className="space-y-8">
            <h2 className="font-display font-bold text-3xl text-text-primary">
              Key Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(project.metrics).map(([key, value], index) => (
                <div key={index} className="p-6 bg-white border border-border-muted rounded-lg shadow-sm">
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-royal">{value}</p>
                    <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          {project.challenges && project.solutions && project.challenges.length > 0 && (
            <section className="space-y-8">
              <h2 className="font-display font-bold text-3xl text-text-primary">
                Challenges & Solutions
              </h2>
              <div className="space-y-8">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-display font-semibold text-xl text-red-600">
                        Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-display font-semibold text-xl text-green-600">
                        Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solutions?.[index] || 'Solution details coming soon'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Links */}
          <section className="space-y-8">
            <h2 className="font-display font-bold text-3xl text-text-primary">
              Project Links
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-royal text-white font-semibold rounded-lg hover:bg-royal-dark transition-all duration-200 hover:scale-105"
              >
                View Live Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-royal text-royal font-semibold rounded-lg hover:bg-royal hover:text-white transition-all duration-200 hover:scale-105"
              >
                View Source Code
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}