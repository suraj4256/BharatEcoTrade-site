import React from 'react'
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 w-full">

      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Bharat Eco Trade</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Sustainable Products from India to the World
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-emerald-700 px-4 py-2 rounded-full text-sm">
              Export Ready
            </span>
            <span className="bg-emerald-700 px-4 py-2 rounded-full text-sm">
              100% Eco-Friendly
            </span>
            <span className="bg-emerald-700 px-4 py-2 rounded-full text-sm">
              Sustainable Materials
            </span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-emerald-900">
              About Bharat Eco Trade
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Bharat Eco Trade is a dedicated exporter of eco-friendly products from India,
              committed to sustainability and environmental responsibility. We specialize
              in jute bags and sustainable packaging solutions for businesses worldwide.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Based in West Bengal, the heartland of jute cultivation in India,
              we focus on quality manufacturing while supporting local artisans
              and sustainable production practices.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-xl font-bold text-emerald-900">
                  Bulk Manufacturing
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Custom Order Support
                </div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-xl font-bold text-emerald-900">
                  Global Shipping
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Export Documentation Ready
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-900">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To provide sustainable alternatives to plastic and promote eco-conscious
              business practices globally through high-quality, affordable products.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-emerald-900 mt-6">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Eco-conscious and sustainable materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Competitive pricing with bulk options</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Custom branding and manufacturing support</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Reliable international shipping</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-20" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-emerald-900">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eco-friendly products designed for sustainability and durability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 shadow-lg rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Jute Shopping Bags
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Durable reusable bags for retail and promotional use.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Multiple size options</li>
                <li>• Natural or laminated finish</li>
                <li>• Custom colors available</li>
                <li>• MOQ: 500 units</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Custom Printed Eco Bags
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Personalized bags with branding and logo printing.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Full-color printing options</li>
                <li>• Screen & digital print</li>
                <li>• Custom design support</li>
                <li>• MOQ: 1000 units</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Sustainable Packaging
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Eco-friendly packaging materials for modern businesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Biodegradable materials</li>
                <li>• Custom sizing</li>
                <li>• Bulk pricing available</li>
              </ul>
            </div>
            <div className="md:col-span-3 text-center mt-12">
              <p className="text-gray-600 mb-4">Need a custom solution?</p>
              <a
                href="#contact"
                className="inline-block bg-emerald-900 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 transition font-semibold"
              >
                Request a Quote
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to make your business more sustainable? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">sales@bharatecotrade.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Address</div>
                  <div className="text-gray-600">Chakdaha, Nadia District</div>
                  <div className="text-gray-600">West Bengal 741222, India</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-900 text-white py-3 px-6 rounded-lg hover:bg-emerald-800 transition font-semibold shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">Bharat Eco Trade</h3>
          <p className="text-gray-400 mb-4">
            Your partner for sustainable exports from India
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 Bharat Eco Trade. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
