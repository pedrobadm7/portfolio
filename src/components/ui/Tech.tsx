import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';
import { AngularIcon } from '../icons/AngularIcon';
import { CssIcon } from '../icons/CssIcon';
import { CypressIcon } from '../icons/CypressIcon';
import { DockerIcon } from '../icons/DockerIcon';
import { GraphQlIcon } from '../icons/GraphQlIcon';
import { HtmllIcon } from '../icons/HtmlIcon';
import { JavaScriptIcon } from '../icons/JavaScriptIcon';
import { JestIcon } from '../icons/JestIcon';
import { MongoDbIcon } from '../icons/MongoDbIcon';
import { NextIcon } from '../icons/NextIcon';
import { NodeJsIcon } from '../icons/NodeJsIcon';
import { PostgreSqlIcon } from '../icons/PostgreSqlIcon';
import { ReactIcon } from '../icons/ReactIcon';
import { TypeScriptIcon } from '../icons/TypeScriptIcon';

export const Tech = forwardRef<HTMLDivElement | object>((_, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useInView({ threshold: 0.5 }, localRef);

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  return (
    <section
      ref={localRef}
      id="tech"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center"
    >
      <div
        className={cn(
          'container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10',
          `transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
        )}
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Technical Stacks
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m proficient in a wide range of technologies and frameworks,
            allowing me to create robust and scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <TypeScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <JavaScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ReactIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              React
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GraphQlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              GraphQL
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NextIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              NextJS
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AngularIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              Angular
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DockerIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              Docker
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <JestIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              Jest
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CypressIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              Cypress
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NodeJsIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              NodeJS
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MongoDbIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              Mongo
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PostgreSqlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              PostgreSQL
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HtmllIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              HTML5
            </span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <CssIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">
              CSS3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});
