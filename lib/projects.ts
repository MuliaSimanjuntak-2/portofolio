import { promises as fs } from 'fs';
import path from 'path';

export interface Project {
  id: string;
  slug: string;
  title: string;
  short: string;
  long: string;
  tech: string[];
  image: string;
  repo: string;
  live: string;
  date: string;
  role: string;
  metrics: {
    [key: string]: string;
  };
  challenges?: string[];
  solutions?: string[];
  hasDetailPage: boolean;
}

export async function getAllProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const projects: Project[] = JSON.parse(fileContents);
  
  // Sort projects by date (newest first)
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug) || null;
}

export async function getFeaturedProjects(limit: number = 3): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.slice(0, limit);
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map(project => project.slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}