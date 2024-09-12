import Hero from "@/components/hero";
import Blogs from "@/components/blogs";
import MyWork from "@/components/myWork";
import { NavbarDemo } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <NavbarDemo />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="my-work">
          <MyWork />
        </section>
        {/* <section id="blogs">
          <Blogs />
        </section> */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}
