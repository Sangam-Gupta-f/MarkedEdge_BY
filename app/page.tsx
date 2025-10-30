import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
// import Clients from "@/components/clients"
import WhyAdcure from "@/components/why-adcure"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import HowWeWork from "@/components/howWeWork"
import ClientTestimonials from "@/components/clientVideoTestimonials"
import ClientTestTestimonials from "@/components/clientTestimonials"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
        <ClientTestimonials />
      <Services />
      <HowWeWork />
      <ClientTestTestimonials />
      {/* <Clients /> */}
      <WhyAdcure />
      <FAQ />
      <Footer />
    </main>
  )
}


