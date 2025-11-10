import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug, getProjectSlugs, formatDate } from '@/lib/projects';
import SimpleBackground from '@/components/SimpleBackground';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
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
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project || !project.hasDetailPage) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Simple Background */}
      <SimpleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-royal/20 via-royal-dark/10 to-transparent"></div>
          
          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-royal/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-royal-light/5 rounded-full blur-2xl animate-pulse-glow"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="space-y-8 animate-fade-in-up">
              <Link
                href="/#projects"
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-royal/10 backdrop-blur-sm rounded-full border border-royal/20 text-royal-light font-medium text-sm">
                  <span className="w-2 h-2 bg-royal rounded-full mr-2 animate-pulse"></span>
                  Case Study
                </div>
                
                <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                  {project.short}
                </p>
                
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center space-x-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <svg className="w-5 h-5 text-royal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-200">{formatDate(project.date)}</span>
                  </div>
                  <div className="flex items-center space-x-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <svg className="w-5 h-5 text-royal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-200">{project.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {/* Project Overview */}
            <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10"></div>
                <div className="relative p-12 space-y-8">
                  <h2 className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Project Overview
                  </h2>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {project.long}
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center space-y-4">
                <h2 className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Tech Stack
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Technologies and tools used in developing this project
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-royal/40 transition-all duration-300 hover-lift text-center"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-royal-light/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative">
                      <span className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && project.challenges.length > 0 && (
              <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-center space-y-4">
                  <h2 className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Challenges & Solutions
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Challenges faced and solutions implemented in developing this project
                  </p>
                </div>
                
                <div className="space-y-12">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8">
                      <div className="group relative p-8 bg-gradient-to-br from-red-500/5 to-red-600/5 backdrop-blur-xl rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover-lift">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                        <div className="relative space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl text-red-400">
                              Challenge #{index + 1}
                            </h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {challenge}
                          </p>
                        </div>
                      </div>
                      
                      <div className="group relative p-8 bg-gradient-to-br from-green-500/5 to-green-600/5 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover-lift">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                        <div className="relative space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-display font-semibold text-xl text-green-400">
                              Solution #{index + 1}
                            </h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {project.solutions?.[index] || 'Solution details coming soon'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Source Code */}
            <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center space-y-4">
                <h2 className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Source Code
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  View the complete source code on GitHub
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-royal to-royal-dark text-white font-bold rounded-xl hover:from-royal-dark hover:to-royal transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Link>
              </div>
            </section>
        </div>
      </div>
      </div>
    </main>
  );
}