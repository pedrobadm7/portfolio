import { projects } from '../../utils/projects'
import { Card } from '../common/Card'

export const Projects = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I've worked on recently. Each project showcases my skills and expertise
            in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {projects.map((project) => {
            return (
              <Card className="overflow-hidden rounded-lg shadow-md" key={project.name}>
                <img
                  src={project.image}
                  alt="Project 1"
                  width="100%"
                  height={225}
                  className="object-cover aspect-video"

                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-[#555] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
