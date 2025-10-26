export default function Clients() {
  const clientLogos = [
    { name: "Divine Guidance", logo: "/divine-guidance-with-shweta-logo.jpg" },
    { name: "Detox", logo: "/detox-green-logo.jpg" },
    { name: "Tatsar Yoga", logo: "/tatsar-yoga-wellness-logo.jpg" },
    { name: "Airlys", logo: "/airlys-modern-logo.jpg" },
  ]

  const portfolioItems = [
    { title: "Non Surgical Face & Body Contouring", image: "/beauty-clinic-website.jpg" },
    { title: "Real Estate Development", image: "/real-estate-building-website.jpg" },
    { title: "Digital Entrepreneurship", image: "/digital-business-website.jpg" },
    { title: "E-commerce Shop", image: "/ecommerce-store-website.jpg" },
  ]

  return (
    <section id="clients" className="py-20 bg-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-16">Our Clients</h2>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clientLogos.map((client) => (
            <div key={client.name} className="bg-white rounded-lg p-6 flex items-center justify-center h-32">
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.title} className="rounded-lg overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
