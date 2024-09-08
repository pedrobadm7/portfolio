import { useState } from 'react';
import profileImage from '../../assets/profile.jpg';

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hi, I'm Pedro Barros</h1>

          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a software developer passionate about creating innovative and impactful solutions. Since 2020, I have been dedicated to developing web and mobile applications using modern technologies like ReactJS, TypeScript, NodeJS, and GraphQL.
          </p>

          {showMore && (
            <>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Currently, I work at a software house in Europe, where collaborating with international teams allows me to develop intuitive interfaces and features that drive project success. My previous experiences at Mettzer and Associação Esperanza were crucial for honing my frontend and backend skills and taught me the value of contributing to tools that make a difference, such as free course platforms and plagiarism detection tools.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My work on projects at Divisio, such as Zelus and Barsala, reinforced my ability to develop scalable and robust solutions with React Native and NextJS. I believe that teamwork and continuous innovation are essential for delivering high-quality products.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Outside of work, I enjoy playing games and cycling, activities that help me maintain balance and creativity. I am always looking for new challenges and opportunities to expand my knowledge and positively impact people's lives through technology.
              </p></>
          )}

          <button
            onClick={toggleShowMore}
            className="px-4 py-2 mt-4 font-bold text-primary-foreground bg-muted rounded hover:bg-primary"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="text-sm font-bold text-foreground">Location</div>
              <div className="text-muted-foreground">Belo Horizonte, Brazil</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-bold text-foreground">Experience</div>
              <div className="text-muted-foreground">4+ years</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-bold text-foreground">Education</div>
              <div className="text-muted-foreground">Systems Analysis and Development</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-bold text-foreground">Hobbies</div>
              <div className="text-muted-foreground">Reading, Traveling, Dance</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <img
            src={profileImage}
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  )
}
