import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        <span className="text-blue-600">Experience</span>
      </h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full rounded"></div>

        <div className="relative bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Frontend Developer Intern
          </h3>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            Vend Hydra Fuel Private Limited
          </a>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mt-2">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-blue-600" /> Durg, Chhattisgarh
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-blue-600" /> August 2025 – September 2025
            </span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              Designed and built responsive interfaces for smart vending machines.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              Developed reusable UI components for faster development.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              Collaborated with backend engineers for real-time API integration.
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              Improved overall interface usability and accessibility.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React.js", "JavaScript", "Responsive Design", "UI Components", "API Integration"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
