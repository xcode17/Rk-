import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="bg-violet-main min-h-screen text-white selection:bg-violet-neon selection:text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
