import { PhoneIcon } from '../icons/PhoneIcon'

export const CallToAction = () => {
  return (
    <section id="cta" className="py-16 px-4 md:px-8 bg-[rgba(255,255,255,0.8)] backdrop-blur-sm">
      <div className="container mx-auto text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-[#555] leading-relaxed font-['Space_Mono', 'monospace'] mb-8"> I'd love to hear from you! Feel free to reach out on WhatsApp.</p>
        <a
          href="#"
          className="inline-flex items-center bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#128C7E] transition-colors"
        >
          <PhoneIcon className="w-5 h-5 mr-2" />
          WhatsApp

        </a>
      </div>
    </section>
  )
}
