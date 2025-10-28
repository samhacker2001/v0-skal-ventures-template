import { Hero } from "@/components/verox/hero"
import { VisionMission } from "@/components/verox/vision-mission"
import { HowItWorks } from "@/components/verox/how-it-works"
import { WhyChooseUs } from "@/components/verox/why-choose-us"
import { ContactSection } from "@/components/verox/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <VisionMission />
      <HowItWorks />
      <WhyChooseUs />
      <ContactSection />
    </main>
  )
}
