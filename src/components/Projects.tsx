import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      category: 'fullstack',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'SaaS Dashboard',
      description: 'Modern analytics dashboard with real-time data visualization, user management, and subscription handling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'frontend',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      id: '3',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and transaction tracking.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      category: 'mobile',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with CMS integration and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
      category: 'frontend',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: '5',
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, real-time updates, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1484662020986-75935d2ebc66?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      category: 'backend',
      githubUrl: '#',
    },
    {
      id: '6',
      title: 'Learning Platform',
      description: 'Online learning platform with video streaming, progress tracking, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'Django', 'AWS'],
      category: 'fullstack',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              A showcase of my recent work, from concept to deployment
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? 'default' : 'outline'}
                  className={`rounded-portfolio font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-portfolio-sm'
                      : 'border-neutral-300 hover:border-teal-600 text-neutral-700 hover:text-teal-600'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-neutral-200 hover:shadow-portfolio-lg transition-all duration-300 hover:scale-105"
              >
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Actions */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.githubUrl && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-700"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-700"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-neutral-100 text-neutral-700 hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Interested in seeing more of my work?
            </p>
            <Button
              variant="outline"
              className="border-2 border-neutral-300 hover:border-teal-600 text-neutral-700 hover:text-teal-600 px-8 py-3 rounded-portfolio font-medium transition-all duration-200 shadow-portfolio-sm hover:shadow-portfolio-md"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
