import React from 'react';

export default function Navbar() {
  const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">AL</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
