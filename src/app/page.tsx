
import Footer from "./components/common_part/Footer";
import NavBar from "./components/common_part/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MySection from "./components/pages/MySection";
import Project from "./components/pages/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="home">
          <MySection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project/>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </main>
  );
}
