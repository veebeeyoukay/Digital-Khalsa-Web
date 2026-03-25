import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | GurBani Finder - Digital Khalsa',
  description:
    'The story behind GurBani Finder: a seva project built by 125kCyberSingh. Free, ad-free, and open source forever.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#000080] to-[#1a1a6e] text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Me.<br />Shared with the Sangat.
          </h1>
          <p className="text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
            I share this because I need to hear it, not because you need to hear it.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* The Name */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                Who is 125kCyberSingh?
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Chamkaur, 40 Singhs faced a Mughal army of over 100,000. As each
                  warrior stepped onto the battlefield, roaring &ldquo;Sat Sri
                  Akal!&rdquo; before attaining Shaheedi, the Nawab was astonished. He
                  remembered the saying:{' '}
                  <em className="text-[#000080] font-semibold">
                    One Singh equals Sava Lakh -- 125,000.
                  </em>
                </p>
                <p>
                  I am no warrior. I carry no sword. But I believe that in this digital
                  age, with Guru Ji&apos;s kirpa and AI as my shastar, even someone
                  stumbling through their own Sikhi journey can serve with the strength
                  of many.
                </p>
                <p className="font-semibold text-[#000080]">
                  That is why <strong>125k</strong>. That is why{' '}
                  <strong>CyberSingh</strong>.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* The Problem */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                The Problem
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I would sit at the Gurdwara, hear something beautiful -- a shabad
                  that pierced straight through -- and try to find it. By the time I
                  searched, Kirtan had moved on. The moment was gone.
                </p>
                <p>
                  I have spent decades in cybersecurity, protecting systems and solving
                  complex problems. But this problem -- connecting with Gurbani in
                  real-time -- felt more urgent than any I had faced professionally.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* The Solution */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                The Solution
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  GurBani Finder exists to solve that problem. For me first. If it
                  helps you, that is not my doing. That is Waheguru&apos;s kirpa.
                </p>
                <p>
                  The avatar removes my ego from this. This is not about credentials
                  or accomplishments. This is about Guru Ji&apos;s message reaching
                  people who need it -- starting with the one who needs it most: me.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* The Shastar */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                The Shastar
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Singhs at Chamkaur were given shastars by Guru Gobind Singh Ji
                  before entering battle. My shastar is different -- it is artificial
                  intelligence. I may not be physically tough or spiritually advanced.
                  But with this tool in my hands and Guru Ji&apos;s blessings on my
                  head, I can build something that serves the Sangat.
                </p>
                <p className="font-semibold text-[#000080]">
                  AI does not make me special. It makes me <em>able</em>.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Seva Commitment */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-4">
                The Seva Commitment
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This is not a business. This is seva -- imperfect, stumbling seva
                  from someone still learning what it means to be a Sikh. If GurBani
                  Finder helps even one person connect more deeply with Gurbani, then
                  the shastar has done its work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] text-center mb-12">
            Our Commitments
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#x267E;</span>
              </div>
              <h3 className="text-xl font-bold text-[#000080] mb-3">Free Forever</h3>
              <p className="text-gray-600 leading-relaxed">
                Guru Ji&apos;s message belongs to everyone. This app will never
                charge a single penny. No subscriptions, no premium tiers, no
                paywalls.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#x1F6AB;</span>
              </div>
              <h3 className="text-xl font-bold text-[#000080] mb-3">No Ads. Ever.</h3>
              <p className="text-gray-600 leading-relaxed">
                We will never place advertisements next to sacred scripture.
                Your spiritual experience will never be interrupted or monetized.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#x1F513;</span>
              </div>
              <h3 className="text-xl font-bold text-[#000080] mb-3">Open Source</h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code is public. Anyone can contribute, audit, or
                fork this project. Transparency is not optional -- it is a
                principle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gurbani Quote */}
      <section className="py-16 bg-gradient-to-br from-[#FF9933] to-[#000080] text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="gurmukhi-2xl font-semibold mb-4">
            ਵਿਚਿ ਦੁਨੀਆ ਸੇਵ ਕਮਾਈਐ ॥ ਤਾ ਦਰਗਹ ਬੈਸਣੁ ਪਾਈਐ ॥
          </p>
          <p className="text-lg italic mb-2 text-white/90">
            Vich dunee-aa sev kamaa-ee-ai. Taa dargah baisan paa-ee-ai.
          </p>
          <p className="text-xl text-white/85 mb-4">
            &ldquo;In this world, perform seva. Then, you shall find a seat in
            the Court of the Lord.&rdquo;
          </p>
          <p className="text-white/60 text-sm">
            Sri Guru Granth Sahib Ji, Ang 26 -- Guru Nanak Dev Ji
          </p>
        </div>
      </section>

      {/* Social + Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://twitter.com/125kCyberSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#000080] hover:text-[#FF9933] transition-colors font-semibold"
              aria-label="Follow @125kCyberSingh on X (Twitter)"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@125kCyberSingh</span>
            </a>
            <a
              href="https://github.com/125kCyberSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#000080] hover:text-[#FF9933] transition-colors font-semibold"
              aria-label="125kCyberSingh on GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/transparency"
              className="text-[#000080] hover:text-[#FF9933] font-semibold transition-colors border-b-2 border-[#FF9933] pb-1"
            >
              View Transparency Page
            </Link>
            <Link
              href="/waitlist"
              className="px-6 py-3 rounded-lg font-semibold bg-[#000080] text-white hover:bg-[#000060] transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          <p className="mt-8 text-xl font-semibold text-[#000080]">
            Waheguru Ji Ka Khalsa. Waheguru Ji Ki Fateh.
          </p>
        </div>
      </section>
    </main>
  );
}
