import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { GithubDashboard } from "@/components/GithubDashboard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        {/* <Research /> */}
        {/* <Achievements /> */}
        <Certificates />
        {/* <GithubDashboard /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
