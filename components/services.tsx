export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* UGC Ad Studio Service */}
        <div className="mb-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/ugc-ad-studio-illustration-with-news-and-analytics.jpg"
              alt="UGC Ad Studio"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <div className="inline-block bg-purple-200 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              AUTHENTIC • AUTHENTIC • AUTHENTIC
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">UGC Ad Studio</h3>
            <p className="text-gray-300 text-lg mb-6">
              We create scroll-stopping UGC ads that look native, feel real, and drive results. Built for brands that want to connect and convert.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                UGC Ads
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Authentic Content
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Service */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <img
              src="/social-media-management-with-apps-and-icons-on-pho.jpg"
              alt="Social Media Management"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <div className="inline-block bg-purple-200 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ADS • ADS • ADS
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Social Media</h3>
            <p className="text-gray-300 text-lg mb-6">
              Ready to make your brand stand out on social media? Let our Social Media Management expertise help your brand shine across digital platforms!
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Facebook Ads
              </button>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                Google Ads
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
