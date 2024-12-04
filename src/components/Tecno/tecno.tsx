import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiMysql,
  SiPython,
  SiTailwindcss,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri"; // BotPress ícono aproximado

function Tecno() {
  return (
    <div className="text-black">
      <section className="py-16 px-4 bg-gray-100" id="technologies">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Tecnologías que manejamos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiJavascript className="text-6xl mb-2 text-yellow-500 hover:text-yellow-600" />
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <FaNodeJs className="text-6xl mb-2 text-green-600 hover:text-green-700" />
            <p className="text-lg">Node.js</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiTypescript className="text-6xl mb-2 text-blue-600 hover:text-blue-700" />
            <p className="text-lg">TypeScript</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiReact className="text-6xl mb-2 text-cyan-500 hover:text-cyan-600" />
            <p className="text-lg">React</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiNextdotjs className="text-6xl mb-2 text-black hover:text-gray-800" />
            <p className="text-lg">Next.js</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiNestjs className="text-6xl mb-2 text-red-600 hover:text-red-700" />
            <p className="text-lg">Nest.js</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiMysql className="text-6xl mb-2 text-blue-800 hover:text-blue-900" />
            <p className="text-lg">MySQL</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiPython className="text-6xl mb-2 text-blue-500 hover:text-blue-600" />
            <p className="text-lg">Python</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiTailwindcss className="text-6xl mb-2 text-teal-400 hover:text-teal-500" />
            <p className="text-lg">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiVercel className="text-6xl mb-2 text-black hover:text-gray-800" />
            <p className="text-lg">Vercel</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <RiChat1Line className="text-6xl mb-2 text-indigo-500 hover:text-indigo-600" />
            <p className="text-lg">BotPress</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <SiFigma className="text-6xl mb-2 text-pink-500 hover:text-pink-600" />
            <p className="text-lg">Figma</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tecno;
