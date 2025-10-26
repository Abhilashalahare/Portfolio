import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32">
      <div className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4">
        👋 Welcome to my portfolio
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
        Abhilasha <span className="text-blue-600">Lahare</span>
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Full Stack Web Developer</h2>

      <p className="max-w-2xl text-lg text-gray-600 mb-6">
        Building seamless digital experiences with <strong>React</strong>, <strong>Node.js</strong>, 
        and modern web technologies. Passionate about creating scalable web products and solving complex problems.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
     
        <a
          href="mailto:abhilashalahare6@gmail.com"
          className="flex items-center bg-white shadow px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 transition"
        >
          <Mail className="w-4 h-4 mr-2 text-blue-600" /> abhilashalahare6@gmail.com
        </a>
      </div>

      <div className="flex gap-6 mb-10">
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-blue-50 transition"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-gray-600">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abhhilashha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Abhilashalahare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 hover:text-gray-800 transition" />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/abhilasha_lahare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code className="w-6 h-6 hover:text-orange-500 transition" />
        </a>
      </div>
    </div>
  );
}
