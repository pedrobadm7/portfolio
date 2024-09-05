import profileImage from '../../assets/profile.jpg'
import { Card } from '../common/Card'

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-[rgba(255,255,255,0.8)] backdrop-blur-sm">
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up">
            <img
              src={profileImage}
              alt="Project 1"
              width={400}
              height={300}
              className="rounded-t-lg"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-[#555] leading-relaxed">
                A beautiful and responsive website for a local business.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
