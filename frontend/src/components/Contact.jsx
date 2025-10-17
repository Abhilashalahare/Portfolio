import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a344lj9",      // Your EmailJS service ID
        "template_e56cpkm",     // Your EmailJS template ID
        form.current,
        "mJpHHi21maCuCpwDu"     // Your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        <span className="text-blue-600">Get In Touch</span>
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h3>

          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <p className="text-gray-700">abhilashalahare6@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <p className="text-gray-700">+91-9301402595</p>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <p className="text-gray-700">Durg, Chhattisgarh, India</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl mt-10">
            <h4 className="font-bold text-lg mb-2">Looking for a developer?</h4>
            <p className="text-sm">
              I'm currently open to new opportunities and exciting projects.
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-2xl shadow p-8 space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"  // <-- Updated for EmailJS
              placeholder="John Doe"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="from_email" // <-- Updated for EmailJS
              placeholder="john@example.com"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Project Collaboration"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project or inquiry..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
