import { Code2, Database, Layers, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        <span className="text-blue-600">About</span> Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow">
          <p className="text-gray-700 leading-relaxed">
            Aspiring Web Developer with a strong foundation in 
            <span className="text-blue-600 font-medium"> Data Structures, Algorithms, and REST API development</span>.
            Skilled in front-end (<strong>React.js</strong>) and back-end (<strong>Node.js</strong>, SQL) technologies.
          </p>
          <p className="text-gray-700 mt-4">
            Passionate about creating 
            <span className="text-blue-600 font-medium"> seamless digital experiences </span>
            and scalable web products. I thrive on solving complex problems and learning new technologies.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-xl flex items-center space-x-3">
            <Code2 className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-900">Frontend Development</h3>
              <p className="text-gray-600 text-sm">Expert in React.js, building responsive interfaces.</p>
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl flex items-center space-x-3">
            <Database className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-900">Backend Development</h3>
              <p className="text-gray-600 text-sm">Proficient in Node.js, Express.js, and databases.</p>
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl flex items-center space-x-3">
            <Layers className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-900">Full-Stack Projects</h3>
              <p className="text-gray-600 text-sm">Experience building end-to-end applications.</p>
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl flex items-center space-x-3">
            <Zap className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-900">Problem Solving</h3>
              <p className="text-gray-600 text-sm">400+ LeetCode problems with strong DSA base.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-6 rounded-xl text-center shadow">
          <h3 className="text-3xl font-bold">400+</h3>
          <p>Problems Solved</p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-6 rounded-xl text-center shadow">
          <h3 className="text-3xl font-bold">1549</h3>
          <p>LeetCode Rating</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-6 rounded-xl text-center shadow">
          <h3 className="text-3xl font-bold">218+</h3>
          <p>Day Streak</p>
        </div>
      </div> */}
    </div>
  );
}
