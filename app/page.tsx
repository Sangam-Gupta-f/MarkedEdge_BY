import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Clients from "@/components/clients"
import WhyAdcure from "@/components/why-adcure"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Clients />
      <WhyAdcure />
      <FAQ />
      <Footer />
    </main>
  )
}
