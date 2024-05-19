import type { Metadata } from "next";
import Hero from "../components/Hero";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Home - Aidan Loughney",
  description:
    "Welcome to my portfolio website! Here, you'll find examples of my software development projects, technical skills, and experience. Browse my site to learn more about how I can contribute to your organization, and to connect with me for potential opportunities.",
};

export default function Page() {
  return (
    <div className="flex flex-col space-y-20 flex-start sm:space-y-40">
      <Hero></Hero>
      {/* <Section title={"Now ⏳"}>
        <ul className="text-lg ">
          <li>· Working at SoFi as a Full-Stack Software Engineer</li>
          <li>· Exploring Salt Lake City & Utah 🏞️</li>
        </ul>
      </Section> */}
    </div>
  );
}
