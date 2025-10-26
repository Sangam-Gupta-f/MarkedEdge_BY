export default function WhyAdcure() {
  return (
    <section id="why" className="py-20 bg-purple-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-200 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              SPECIAL • SPECIAL • SPECIAL
            </div>
            <h2 className="text-5xl font-bold text-black mb-4">What Makes Us Unique?</h2>
            <p className="text-gray-600 text-lg">MarkedEdge V/S Others</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Others Column */}
            <div>
              <div className="inline-block bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                OTHERS
              </div>
              <div className="space-y-4">
                {["Slow response time", "Average methods", "Delayed reporting", "No quick replies"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">✕</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MarkedEdge Column */}
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                MarkedEdge
              </div>
              <div className="space-y-4">
                {["Fast and quick responses", "Honest approach", "Clear and accurate reporting", "Exact solutions"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <p className="text-center text-gray-700">
              Still Have A Question?{" "}
              <a href="#" className="font-bold text-black underline hover:text-gray-600">
                Chat With Our Experts
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
