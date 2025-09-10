import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-background text-foreground font-sans flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl text-center space-y-6">
        {/* शीर्षक */}
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
          AI के साथ अपनी फ़सल का उत्पादन पूर्वानुमान और अनुकूलित करें
        </h1>

        {/* उपशीर्षक / विवरण */}
        <p className="text-lg sm:text-xl text-foreground/80">
          AgroVision ऐतिहासिक कृषि डेटा, मौसम के पैटर्न, और मिट्टी के स्वास्थ्य
          के मेट्रिक्स का उपयोग करता है ताकि सिंचाई, उर्वरक और कीट नियंत्रण के
          लिए व्यावहारिक सुझाव प्रदान किए जा सकें। अनुकूलित जानकारी किसानों को
          अधिकतम उत्पादकता प्राप्त करने में मदद करती है।
        </p>

        {/* अपेक्षित परिणाम हाइलाइट */}
        <p className="text-md sm:text-lg text-foreground/70 italic">
          डेटा-संचालित अंतर्दृष्टि के साथ कम से कम 10% उत्पादकता बढ़ाएं।
          इंटरफ़ेस क्षेत्रीय भाषाओं का समर्थन करता है ताकि सभी के लिए सुलभ हो।
        </p>

        {/* CTA बटन */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/predict"
            className="bg-primary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
          >
            उत्पादन पूर्वानुमान करें
          </Link>
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-foreground transition-colors duration-300"
          >
            और जानें
          </a>
        </div>
      </div>
    </section>
  );
}
