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
    <section id="tech" className="py-16 px-4 md:px-8">
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold mb-8">Tech Stacks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="flex flex-col items-center animate-fade-in-up">
            <TypeScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">TypeScript</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <JavaScriptIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">JavaScript</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <ReactIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">React</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <GraphQlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">GraphQL</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <NextIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">NextJS</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <AngularIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Angular</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <DockerIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Docker</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <JestIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Jest</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <CypressIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Cypress</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <NodeJsIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">NodeJS</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <MongoDbIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">Mongo</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
            <PostgreSqlIcon className="w-12 h-12 mb-2" />
            <span className="text-[#555] font-['Space_Mono', 'monospace']">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up">
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
