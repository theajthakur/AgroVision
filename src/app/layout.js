import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/providers/layoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://agrovision.com"),
  title: {
    default: "AgroVision Dashboard",
    template: "%s | AgroVision Dashboard",
  },
  description:
    "AgroVision is an AI-powered platform that helps farmers predict crop yields, optimize irrigation, fertilization, and pest control. Our solution provides actionable insights tailored to specific crops and regional conditions to increase productivity and sustainability.",
  openGraph: {
    title: {
      default: "AgroVision Dashboard",
      template: "%s | AgroVision Dashboard",
    },
    description:
      "AgroVision leverages historical agricultural data, real-time weather, and soil metrics to provide actionable recommendations for farmers. Improve crop productivity with AI-powered insights.",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/4147/4147953.png",
      },
    ],
    url: "https://agrovision.com/",
    siteName: "AgroVision Dashboard",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  keywords: [
    "AgroVision",
    "Crop Yield Prediction",
    "Agriculture AI",
    "Farm Management",
    "Irrigation Optimization",
    "Fertilization Recommendations",
    "Pest Control",
    "Smart Farming",
    "Data-driven Agriculture",
    "Sustainable Farming",
    "Regional Crop Insights",
    "AI for Farmers",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
