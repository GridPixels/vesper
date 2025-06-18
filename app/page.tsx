import Blog from "@/components/sections/blog";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import NewsletterCta from "@/components/sections/newsletter-cta";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="bg-white max-w-4xl mx-auto px-30">
      <Hero />
      <Experience />
      <Blog />
      <Projects />
      <NewsletterCta />
    </main>
  );
}
