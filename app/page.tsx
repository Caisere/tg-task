import { AcademySection } from "@/components/academy-section";
import { CallToAction } from "@/components/call-to-action";
import { CeoHubSection } from "@/components/ceo-hub-section";
import { ConsultantSection } from "@/components/consultant-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ManagementSection } from "@/components/management-section";
import { Testimonials } from "@/components/testimonials";
import { TrainingHighlights } from "@/components/training-highlights";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AcademySection />
        <TrainingHighlights />
        <ManagementSection />
        <CeoHubSection />
        <ConsultantSection />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
