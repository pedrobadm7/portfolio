import { AngularIcon } from '../icons/AngularIcon'
import { CssIcon } from '../icons/CssIcon'
import { CypressIcon } from '../icons/CypressIcon'
import { DockerIcon } from '../icons/DockerIcon'
import { GraphQlIcon } from '../icons/GraphQlIcon'
import { HtmllIcon } from '../icons/HtmlIcon'
import { JavaScriptIcon } from '../icons/JavaScriptIcon'
import { JestIcon } from '../icons/JestIcon'
import { MongoDbIcon } from '../icons/MongoDbIcon'
import { NextIcon } from '../icons/NextIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { PostgreSqlIcon } from '../icons/PostgreSqlIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { TypeScriptIcon } from '../icons/TypeScriptIcon'

export const Tech = () => {
  return (
    <section id="tech" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Stacks</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm proficient in a wide range of technologies and frameworks, allowing me to create robust and scalable
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

          <div className="flex flex-col items-center gap-2">
            <TypeScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <JavaScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ReactIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GraphQlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">GraphQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NextIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">NextJS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AngularIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Angular</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DockerIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <JestIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Jest</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CypressIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Cypress</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NodeJsIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">NodeJS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MongoDbIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Mongo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PostgreSqlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HtmllIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">HTML5</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <CssIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">CSS3</span>
          </div>
        </div>

      </div>
    </section>
  )
}
