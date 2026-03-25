import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/dk-web-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933] to-[#000080] opacity-75" />
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Built for Me,
              <br />
              Shared with the Sangat
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              I could not keep up with Kirtan at the Gurdwara. So I built
              GurBani Finder.
              <br />
              <br />
              If it helps you too, that is Waheguru&apos;s grace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/find"
                className="bg-white text-[#000080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-center text-lg"
              >
                Find Gurbani by Emotion
              </Link>
              <Link
                href="/waitlist"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#000080] transition text-center text-lg"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is GurBani Finder */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-12">
              Shazam for Kirtan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">&#x1F4F7;</span>
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">
                  Point Your Camera
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  See Gurmukhi on a projector screen, a gutka, or anywhere?
                  Point your phone at it.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">&#x26A1;</span>
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">
                  AI Identifies It
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI reads Gurmukhi text and matches it to Sri Guru Granth
                  Sahib Ji in under 3 seconds.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">&#x1F4D6;</span>
                </div>
                <h3 className="text-xl font-bold text-[#000080] mb-3">
                  Understand the Shabad
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get the full shabad with English translation, transliteration,
                  and Ang number instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotion Gurbani Teaser */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
              Not Sure What Shabad to Read?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Select your emotion and let Gurbani speak to your heart. Our
              curated collection matches shabads to how you are feeling right
              now.
            </p>
            <Link
              href="/find"
              className="inline-block bg-gradient-to-r from-[#FF9933] to-[#000080] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
            >
              Try the Emotion Finder
            </Link>
          </div>
        </div>
      </section>

      {/* Live Gurdwara Streams Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#000080] to-[#FF9933]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">&#x1F3A5;</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watch Live Gurdwara Streams
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with the Sangat worldwide. Watch live kirtan, katha, and
              prayers from gurdwaras around the globe.
              <br />
              Anonymous viewing, no account required.
            </p>
            <Link
              href="/streams"
              className="inline-block bg-white text-[#000080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-center text-lg"
            >
              View Live Streams Now
            </Link>
          </div>
        </div>
      </section>

      {/* Commitments Banner */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">&#x267E;</div>
              <h3 className="text-xl font-bold text-[#000080] mb-2">
                Free Forever
              </h3>
              <p className="text-gray-600">
                No subscriptions. No premium tier. Guru Ji&apos;s message
                belongs to everyone.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">&#x1F6AB;</div>
              <h3 className="text-xl font-bold text-[#000080] mb-2">
                No Ads. Ever.
              </h3>
              <p className="text-gray-600">
                We will never place advertisements next to sacred scripture.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">&#x1F513;</div>
              <h3 className="text-xl font-bold text-[#000080] mb-2">
                Open Source
              </h3>
              <p className="text-gray-600">
                Every line of code is public. Audit it, fork it, contribute to
                it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
