'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/find', label: 'Find Gurbani' },
  { href: '/streams', label: 'Live Streams' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-8 md:top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-2 text-xl md:text-2xl font-bold transition-colors text-[#000080]"
          >
            <span
              className="text-2xl md:text-3xl"
              role="img"
              aria-label="Khanda"
            >
              &#x262C;
            </span>
            <span>GurBani Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors relative pb-1 ${
                  isActive(link.href)
                    ? 'text-[#FF9933]'
                    : 'text-[#000080] hover:text-[#FF9933]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF9933] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isActive('/waitlist')
                  ? 'bg-[#FF9933] text-white'
                  : 'bg-[#000080] text-white hover:bg-[#000060]'
              }`}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-[#000080]"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 bg-white rounded-b-lg -mx-6 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#FF9933]/10 text-[#FF9933] border-l-4 border-[#FF9933]'
                    : 'text-[#000080] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/waitlist"
                onClick={handleLinkClick}
                className="block px-6 py-3 rounded-lg font-semibold text-center transition-all bg-[#000080] text-white hover:bg-[#000060]"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
