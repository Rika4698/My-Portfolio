import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <div className="relative overflow-x-hidden">
        <About />
        <Skills />
        <Education />
        <Projects />
        <WhyHireMe />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

