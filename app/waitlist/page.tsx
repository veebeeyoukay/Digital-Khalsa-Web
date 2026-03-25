import type { Metadata } from 'next';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Join the Waitlist | GurBani Finder',
  description:
    'Sign up for early access to GurBani Finder. Help test, contribute, or just be notified when it launches. Free forever.',
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen">
      {/* Waitlist Signup Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#000080] to-[#FF9933]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the Waitlist
            </h1>
            <p className="text-xl text-white/90 mb-2 max-w-2xl mx-auto">
              Be among the first to use GurBani Finder.
            </p>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-2">
              Help me make this better. Give feedback. Find bugs.
            </p>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Your input shapes what this becomes.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">&#x1F512;</div>
              <p className="font-semibold text-[#000080]">Your data is safe</p>
              <p className="text-sm text-gray-500">
                We only store what you give us. No tracking. No selling.
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">&#x1F4E7;</div>
              <p className="font-semibold text-[#000080]">No spam, ever</p>
              <p className="text-sm text-gray-500">
                We will only email you about GurBani Finder updates.
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">&#x2764;&#xFE0F;</div>
              <p className="font-semibold text-[#000080]">Built with seva</p>
              <p className="text-sm text-gray-500">
                Free forever. Open source. For the Sangat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
