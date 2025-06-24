import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { SiGithub } from 'react-icons/si';

// ---- image assets (Vite will hash & copy on build) ----
import barsalaImg from '@/assets/images/barsala.png';
import egv4Img from '@/assets/images/egv4.png';
import fincheckImg from '@/assets/images/fincheck.jpeg';
import launcherImg from '@/assets/images/launcher.png';
import mettzerImg from '@/assets/images/mettzer.png';
import tokenfiImg from '@/assets/images/tokenfi.png';
import travelAppImg from '@/assets/images/travel-app.png';
import waiterAppImg from '@/assets/images/waiterApp.jpeg';
import zelusImg from '@/assets/images/zelus.png';

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
      id: '0',
      title: 'Tokenfi Launcher',
      description:
        'Launch your own cryptocurrency (like FLOKI) or NFTs without touching a line of code.',
      image: launcherImg,
      technologies: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'WagmiJS',
        'Viem',
        'EtherJS',
      ],
      category: 'frontend',
      liveUrl: 'https://www.tokenfi.com/token-launcher',
    },
    {
      id: '1',
      title: 'TokenFi Launchpad',
      description:
        'TokenFi Launchpad is a decentralized launchpad that allows users to raise funds and access liquidity for their tokens.',
      image: tokenfiImg,
      technologies: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'WagmiJS',
        'Viem',
        'EtherJS',
      ],
      category: 'frontend',
      liveUrl: 'https://lp.tokenfi.com/en-US',
    },
    {
      id: '2',
      title: 'JP Morgan Chase Equity Gateway',
      description:
        'An automated equity management software that helps you save time and money, cut back on administration and get your employees engaged with their equity awards.',
      image: egv4Img,
      technologies: ['React', 'TypeScript', 'MUI', 'React hooks'],
      category: 'fullstack',
      githubUrl: '',
      liveUrl: 'https://www.globalshares.com/equity-management-software/',
      featured: false,
    },
    {
      id: '3',
      title: 'Zelus',
      description:
        'Zelus is a mobile wallet that allows you to send, receive and store crypto assets.',
      image: zelusImg,
      technologies: [
        'React Native',
        'Ether.js',
        'Node.js',
        'PostgreSQL',
        'TypeScript',
      ],
      category: 'mobile',
      githubUrl: '',
      liveUrl: 'https://www.zelus.io/solutions/zelus-wallet',
      featured: false,
    },
    {
      id: '4',
      title: 'Finchek',
      description:
        'Fincheck is a financial control application, allowing you to register bank accounts and record expenses and income in a simple way.',
      image: fincheckImg,
      technologies: [
        'React',
        'TypeScript',
        'NodeJS',
        'NestJS',
        'PostgreSQL',
        'TailwindCSS',
      ],
      category: 'fullstack',
      githubUrl: 'https://github.com/pedrobadm7/fincheck-web',
      liveUrl: '',
      featured: true,
    },
    {
      id: '5',
      title: 'Mettzer',
      description:
        'Mettzer is a platform designed to simplify the process of writing academic papers. It helps students focus on content by automating formatting and structure, making it easier to produce high-quality work without sacrificing time.',
      image: mettzerImg,
      technologies: [
        'React',
        'SASS',
        'Jest',
        'Cypress',
        'MongoDB',
        'NodeJS',
        'PostgreSQL',
        'ExpressJS',
      ],
      category: 'fullstack',
      githubUrl: '',
      liveUrl: 'https://www.mettzer.com/',
    },
    {
      id: '6',
      title: 'Waiter App',
      description:
        "The Waiter App is an application that allows customers of restaurants, snack bars and similar establishments to place orders quickly and conveniently, making the waiter's only job to take the order to the customer.",
      image: waiterAppImg,
      technologies: [
        'NodeJS',
        'NestJS',
        'PostgreSQL',
        'Socket.io',
        'React',
        'React Native',
        'MongoDB',
      ],
      category: 'fullstack',
      githubUrl: 'https://github.com/pedrobadm7/mobile-waiterapp',
      featured: true,
    },
    {
      id: '7',
      title: 'Barsala',
      description:
        'Barsala is a platform that allows you to find the best bars and restaurants in your area.',
      image: barsalaImg,
      technologies: ['React', 'TypeScript', 'NestJS', 'React Native'],
      category: 'fullstack',
      githubUrl: '',
      liveUrl: 'https://www.barsala.com/',
    },
    {
      id: '8',
      title: 'Fidelidade Travel App',
      description:
        'Travel App keeps users informed about all trip activities and connected with fellow travelers. It allows users to share their experiences and stay up to date with announcements from the organizers.',
      image: travelAppImg,
      technologies: [
        'React Native',
        'TypeScript',
        'One Signal Push Notification',
      ],
      category: 'mobile',
      githubUrl: '',
      liveUrl:
        'https://apps.apple.com/pt/app/fidelidade-travel-app/id1219435098',
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

  const filteredProjects = projects.filter((project) => {
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
              Most important projects
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
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both',
                  }}
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
                            <SiGithub className="h-4 w-4" />
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
                href="https://github.com/pedrobadm7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="mr-2 h-5 w-5" />
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
