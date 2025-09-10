import React from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Feature";

export default function Homepage() {
  const components = [Hero, Features];
  return (
    <div className="homepage-container">
      {components.map((e, i) => {
        const Element = e;
        return (
          <div key={i}>
            {i > 0 && (
              <div className="border-t border-foreground/30 my-8"></div>
            )}
            <Element />
          </div>
        );
      })}
    </div>
  );
}
