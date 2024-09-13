import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';
import { PhoneIcon } from '../icons/PhoneIcon';

export const CallToAction = forwardRef<HTMLDivElement | object>((_, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useInView({ threshold: 0.3 }, localRef);

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const phoneNumber = '5573999577204';
  const message =
    'Olá Pedro, gostaria de conversar sobre uma possível oportunidade de trabalho como desenvolvedor de software.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      ref={localRef}
      id="cta"
      className={cn(
        'w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center',
      )}
    >
      <div
        className={cn(
          'container grid items-center justify-center gap-4 px-4 text-center md:px-6',
          `transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
        )}
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m always excited to connect with new people and discuss
            potential collaborations or projects. Feel free to reach out to me
            using the button below.
          </p>
        </div>
        <div>
          {' '}
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            rel="noreferrer"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Contact Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
});
