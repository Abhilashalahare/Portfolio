import { Video, Sparkles, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: <Video className="w-7 h-7 text-blue-500" />,
      title: "Real-Time Peer-to-Peer Video & Chat Web App",
      desc: "Built a one-on-one video call app using WebRTC and Socket.IO with authentication and dynamic meeting links. Deployed a responsive UI using Material-UI.",
      tags: ["React.js", "Node.js", "WebRTC", "Socket.IO", "MongoDB", "Material-UI"],
      live: "https://vibecall-frontend.onrender.com/", // 🔗 Live Demo link
      code: "https://github.com/Abhilashalahare/VibeCall", // 🔗 GitHub Repo link
    },
    {
      icon: <Sparkles className="w-7 h-7 text-pink-500" />,
      title: "Imagify – AI SaaS Image Generator",
      desc: "Built a full-stack AI tool to generate images from text using ClipDrop API. Integrated Razorpay for payments and JWT authentication for users.",
      tags: ["React.js", "Node.js", "ClipDrop API", "Razorpay", "MongoDB", "Tailwind CSS"],
      live: "https://text-to-image-generator-1-04nn.onrender.com/", // 🔗 Live Demo link
      code: "https://github.com/Abhilashalahare/Text-to-Image-Generator", // 🔗 GitHub Repo link
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        <span className="text-blue-600">Featured</span> Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center space-x-3 mb-4">
              {p.icon}
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Live Demo Link */}
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:scale-105 transition"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>

              {/* GitHub Code Link */}
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/Abhilashalahare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          View More on GitHub →
        </a>
      </div>
    </section>
  );
}
