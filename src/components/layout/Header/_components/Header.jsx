"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100px] items-center">
          <Link href={"/"}>
            <div className="flex sm:gap-2 text-grey active:scale-100 justify-center items-center font-heading text-2xl select-none cursor-pointer hover:scale-105 transition-transform">
              <div className="logo-container">
                <img
                  src="/favicon/android-chrome-512x512.png"
                  alt="Logo"
                  width={80}
                />
              </div>
              <div className="logo-detail">
                <div className="">
                  <p className="text-[25px]">AgroVision</p>
                  <p className="text-[16px]">Smart Fields, Smart Yields</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-sans text-foreground">
            <a
              href="#home"
              className="special-nav-link hover:text-secondary transition"
            >
              Home
            </a>
            <a
              href="#features"
              className="special-nav-link hover:text-secondary transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="special-nav-link hover:text-secondary transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="special-nav-link hover:text-secondary transition"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-[var(--color-primary)] transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 text-foreground font-sans">
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-secondary/10 rounded"
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-4 py-2 hover:bg-secondary/10 rounded"
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-secondary/10 rounded"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-secondary/10 rounded"
            >
              Contact
            </a>
            <button className="w-full text-left px-4 py-2 bg-secondary text-foreground rounded-lg font-semibold hover:bg-[var(--color-primary)] transition">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
