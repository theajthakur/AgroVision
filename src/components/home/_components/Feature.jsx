import React from "react";
import { BarChart2, Droplet, Sun, MapPin } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "फ़सल उत्पादन पूर्वानुमान",
    description:
      "ऐतिहासिक कृषि डेटा, मौसम के पैटर्न और मिट्टी के स्वास्थ्य मेट्रिक्स का उपयोग करके फ़सल उत्पादन का सटीक पूर्वानुमान लगाएं।",
  },
  {
    icon: <Droplet className="w-8 h-8 text-primary" />,
    title: "सिंचाई अनुकूलन",
    description:
      "बेहतर फ़सल विकास और संसाधन प्रबंधन के लिए जल उपयोग को अनुकूलित करने के व्यावहारिक सुझाव प्राप्त करें।",
  },
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "उर्वरक और कीट नियंत्रण",
    description:
      "अपने फ़सल और क्षेत्र के अनुसार उर्वरक देने का समय और कीट प्रबंधन पर मार्गदर्शन प्राप्त करें।",
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "क्षेत्रीय अंतर्दृष्टि",
    description:
      "कई भाषाओं का समर्थन करता है और क्षेत्रीय परिस्थितियों व फ़सल के प्रकार के आधार पर सुझाव प्रदान करता है।",
  },
];

export default function Features() {
  return (
    <section className="bg-background text-foreground font-sans py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
          मुख्य विशेषताएँ
        </h2>
        <p className="text-foreground/80 mt-4">
          AgroVision AI का उपयोग करता है ताकि किसानों को डेटा-आधारित सुझाव मिल
          सकें और वे अपनी फ़सल की उत्पादकता अधिकतम कर सकें।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-primary/10 p-6 rounded-xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-heading font-semibold text-primary">
              {feature.title}
            </h3>
            <p className="mt-2 text-foreground/80 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
