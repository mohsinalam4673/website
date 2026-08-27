import { Benefits } from "@/components/sections/benefits";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { FieldNotes } from "@/components/sections/field-notes";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Process />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FieldNotes />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
