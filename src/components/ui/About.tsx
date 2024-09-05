import profileImage from '../../assets/profile.jpg'

export const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>

          <p className="text-[#555] leading-relaxed">
            I'm a passionate web developer with a love for creating beautiful and functional websites. I have
            experience in a variety of technologies and am always eager to learn more.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in-up">
          <img
            src={profileImage}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  )
}
