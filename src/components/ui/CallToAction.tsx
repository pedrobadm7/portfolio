import { PhoneIcon } from '../icons/PhoneIcon'

export const CallToAction = () => {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Connect</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm always excited to connect with new people and discuss potential collaborations or projects. Feel
            free to reach out to me using the button below.
          </p>
        </div>
        <div> <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <PhoneIcon className="mr-2 h-5 w-5" />
          Contact Me on WhatsApp

        </a></div>
      </div>
    </section>
  )
}
