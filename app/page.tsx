import Hero from "@/components/hero";
import Blogs from "@/components/blogs";
import MyWork from "@/components/myWork";
import { NavbarDemo } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { AboutMe } from "@/components/aboutMe";
import { About } from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className=" w-full">
        <NavbarDemo />
        <Hero />
        {/* <AboutMe /> */}
        <About />
        <Skills />
        <div id="my-work">
          <MyWork />
        </div>
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
