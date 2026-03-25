import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000080] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              GurBani Finder
            </Link>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Shazam for Kirtan. Built as seva -- free, ad-free, and open source forever.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold mb-4 text-[#FFD700]">Explore</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/find" className="hover:text-[#FF9933] transition-colors">
                  Find Gurbani
                </Link>
              </li>
              <li>
                <Link href="/streams" className="hover:text-[#FF9933] transition-colors">
                  Live Streams
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#FF9933] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:text-[#FF9933] transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-bold mb-4 text-[#FFD700]">About</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:text-[#FF9933] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-[#FF9933] transition-colors">
                  Transparency
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FF9933] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF9933] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4 text-[#FFD700]">Connect</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="https://twitter.com/125kCyberSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/125kcybersingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/125kCyberSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition-colors"
                >
                  GitHub (Open Source)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p className="mb-2 text-white/90">
            Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh
          </p>
          <p className="text-white/60 text-sm">
            Built with Seva. For me. For the Sangat. Free forever.
          </p>
          <p className="text-white/40 mt-2 text-xs">
            &copy; {new Date().getFullYear()} Digital Khalsa &middot; Open Source
          </p>
        </div>
      </div>
    </footer>
  );
}
