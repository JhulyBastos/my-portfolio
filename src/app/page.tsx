import AboutMe from "@/components/AboutMe";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className=" flex flex-1 flex-col bg-dark-10">
      <div>
        <Header />
      </div>
      <div>
        <Section />
      </div>
      <div className="flex flex-col items-center mt-16">
        <div>
          <AboutMe />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
