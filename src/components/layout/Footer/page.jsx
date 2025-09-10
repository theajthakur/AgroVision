import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Logo */}
        <div className="text-2xl font-heading font-bold">AgroVision</div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-center">
          <a
            href="#home"
            className="hover:text-light transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-light transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#about"
            className="hover:text-light transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-light transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social / Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-foreground/80">
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-light transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-light transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-light transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} AgroVision. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
