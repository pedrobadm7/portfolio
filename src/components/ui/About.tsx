import profileImage from '../../assets/profile.jpg'

export const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hi, I'm Pedro Barros</h1>

          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a passionate web developer with a strong background in front-end technologies. I love creating
            beautiful and functional websites that provide an exceptional user experience.
          </p>
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
