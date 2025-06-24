import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Delivered', value: '12+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Technologies', value: '10+' },
  ];

  const technologies = [
   'TypeScript', 'JavaScript', 'React', 'GraphQL', 'NextJS', 'Angular', 'Docker', 'Jest', 'Cypress', 'NodeJS', 'MongoDB', 'PostgreSQL', 'HTML5', 'CSS3'
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Turning ideas into elegant digital experiences through code and creativity
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-teal-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-2">
                      <img
                        src="src/assets/profile.jpg"
                        alt="Pedro Barros"
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 4 years of experience
                  creating digital solutions that make a difference. My journey began in 2020,
                  and since then, I've been dedicated to crafting exceptional web experiences.
                </p>
                <p>
                  I specialize in modern web technologies like React, Next.js, and TypeScript,
                  with a strong focus on performance, accessibility, and user experience.
                  I believe in writing clean, maintainable code that scales.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 hover:border-teal-300 hover:text-teal-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-6 text-center bg-white border-neutral-200 hover:shadow-portfolio-md transition-shadow duration-200"
              >
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;