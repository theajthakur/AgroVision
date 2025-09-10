import React from "react";

export default function Hero() {
  return (
    <section className="bg-background text-foreground font-sans flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl text-center space-y-6">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
          Predict and Optimize Your Crop Yield with AI
        </h1>

        {/* Subheadline / Description */}
        <p className="text-lg sm:text-xl text-foreground/80">
          AgroVision leverages historical agricultural data, weather patterns,
          and soil health metrics to provide actionable recommendations for
          irrigation, fertilization, and pest control. Tailored insights help
          farmers maximize productivity.
        </p>

        {/* Expected Outcome Highlight */}
        <p className="text-md sm:text-lg text-foreground/70 italic">
          Increase productivity by at least 10% with data-driven insights.
          Interface supports regional languages for accessibility.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="#predict"
            className="bg-primary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
          >
            Predict Yield
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-foreground transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
