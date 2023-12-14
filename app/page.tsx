import Head from "next/head";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Upcoming from "@/components/upcoming";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Head>
        <title>Your Home Page Title</title>
        <meta property="og:title" content="Your Home Page Title" />
        <meta property="og:description" content="Your home page description." />
        <meta property="og:image" content="/link_pic.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Home Page Title" />
        <meta
          name="twitter:description"
          content="Your home page description."
        />
        <meta name="twitter:image" content="/link_pic.png" />
      </Head>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Upcoming />
      <Contact />
    </main>
  );
}
