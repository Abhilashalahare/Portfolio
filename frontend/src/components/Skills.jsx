import { Code2, Database, ToolCase, Zap } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        <span className="text-blue-600">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {/* Languages */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-lg text-gray-900">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Java", "SQL", "Python", "Typescript"].map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <Database className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold text-lg text-gray-900">Frameworks</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "Node.js", "Express.js"].map((skill) => (
              <span
                key={skill}
                className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <Database className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-lg text-gray-900">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["MongoDB", "MySQL"].map((skill) => (
              <span
                key={skill}
                className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <ToolCase className="w-6 h-6 text-orange-600" />
            <h3 className="font-semibold text-lg text-gray-900">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "Postman", "VS Code"].map((skill) => (
              <span
                key={skill}
                className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="w-6 h-6 text-pink-600" />
            <h3 className="font-semibold text-lg text-gray-900">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "Tailwind CSS", "Bootstrap"].map((skill) => (
              <span
                key={skill}
                className="bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}

        {/* Other */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h3 className="font-semibold text-lg text-gray-900">Other</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Socket.IO", "WebRTC", "JWT Authentication", "GenAI"].map((skill) => (
              <span
                key={skill}
                className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Coding Achievements */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
          Coding Achievements
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-orange-500 font-semibold mb-2">LeetCode</p>
            <h4 className="text-2xl font-bold text-gray-900">400+ Problems</h4>
            <p className="text-gray-600 text-sm mt-1">
              Rating: 1549 (Top 31.85%)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-green-600 font-semibold mb-2">GeeksforGeeks</p>
            <h4 className="text-2xl font-bold text-gray-900">Rating: 1667</h4>
            <p className="text-gray-600 text-sm mt-1">Top 33.6% globally</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-blue-600 font-semibold mb-2">Coding Streak</p>
            <h4 className="text-2xl font-bold text-gray-900">218+ Days</h4>
            <p className="text-gray-600 text-sm mt-1">Active daily practice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
