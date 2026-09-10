import type { Metadata } from "next";
import AboutContent from "@/components/About/AboutContent/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "About our products",
  keywords: ["about shop", "shop", "online store"],
};

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <AboutContent />
    </div>
  );
}
