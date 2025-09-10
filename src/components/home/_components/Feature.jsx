import React from "react";
import { BarChart2, Droplet, Sun, MapPin } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Predict Crop Yield",
    description:
      "Use historical agricultural data, weather patterns, and soil health metrics to accurately predict crop output.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-primary" />,
    title: "Optimize Irrigation",
    description:
      "Receive actionable recommendations to optimize water usage for better crop growth and resource management.",
  },
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "Fertilization & Pest Control",
    description:
      "Get guidance on fertilization schedules and pest management tailored to your crop and region.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary" />,
    title: "Regional Insights",
    description:
      "Supports multiple languages and provides recommendations based on regional conditions and crop type.",
  },
];

export default function Features() {
  return (
    <section className="bg-background text-foreground font-sans py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
          Key Features
        </h2>
        <p className="text-foreground/80 mt-4">
          AgroVision leverages AI to provide farmers with data-driven insights
          to maximize crop productivity.
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
