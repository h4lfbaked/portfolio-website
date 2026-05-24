import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { PersonalProject } from "@/components/sections/personal-project";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <PersonalProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
