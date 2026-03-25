import type { Metadata } from 'next';
import EmotionFinder from '@/components/EmotionFinder';

export const metadata: Metadata = {
  title: 'Find Gurbani by Emotion | GurBani Finder',
  description:
    'Select how you are feeling and discover Gurbani verses that speak to your heart. Gurmukhi text with English transliteration and translation.',
};

export default function FindPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#000080] to-[#1a1a6e]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Gurbani by Emotion
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Gurbani speaks to every state of the heart. Select how you are feeling
            and let the Guru&apos;s words meet you where you are.
          </p>
        </div>
      </section>

      {/* Emotion Finder Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <EmotionFinder />
        </div>
      </section>

      {/* Context / Disclaimer */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            These are curated selections for inspiration. For complete study of
            Sri Guru Granth Sahib Ji, we recommend{' '}
            <a
              href="https://www.sikhitothemax.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000080] hover:text-[#FF9933] underline"
            >
              SikhiToTheMax
            </a>{' '}
            and{' '}
            <a
              href="https://www.searchgurbani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000080] hover:text-[#FF9933] underline"
            >
              SearchGurbani.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
