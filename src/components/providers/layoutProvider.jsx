"use client";

import Footer from "../layout/Footer/page";
import Navbar from "../layout/Header/page";

export default function LayoutProvider({ children }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        {children}
      </div>
      <Footer />
    </div>
  );
}
