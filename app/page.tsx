import Hero from "@/components/hero";
import Blogs from "@/components/blogs";
import MyWork from "@/components/myWork";
import { NavbarDemo } from "@/components/navbar";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarDemo />
        <Hero />
        <Skills />
        <MyWork />
        <Blogs />
      </div>
    </main>
  );
}
