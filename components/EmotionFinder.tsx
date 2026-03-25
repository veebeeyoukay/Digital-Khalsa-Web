'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  type Emotion,
  type GurbaniVerse,
  EMOTION_META,
  getRandomVerses,
} from '@/data/gurbani';

const EMOTIONS = Object.keys(EMOTION_META) as Emotion[];

export default function EmotionFinder() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [verses, setVerses] = useState<GurbaniVerse[]>([]);
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());

  const handleEmotionSelect = useCallback((emotion: Emotion) => {
    setSelectedEmotion(emotion);
    setVerses(getRandomVerses(emotion, 4));
  }, []);

  const handleSave = useCallback((id: number) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleShowMore = useCallback(() => {
    if (!selectedEmotion) return;
    setVerses(getRandomVerses(selectedEmotion, 4));
  }, [selectedEmotion]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Emotion Selector Grid */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000080] mb-2">
          How are you feeling right now?
        </h2>
        <p className="text-gray-500 mb-8">
          There is no wrong answer. Gurbani meets you where you are.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {EMOTIONS.map((emotion) => {
            const meta = EMOTION_META[emotion];
            const isSelected = selectedEmotion === emotion;
            return (
              <button
                key={emotion}
                onClick={() => handleEmotionSelect(emotion)}
                className={`group relative p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
                  isSelected
                    ? 'border-[#FF9933] bg-[#FF9933]/10 shadow-lg scale-[1.02]'
                    : 'border-gray-200 bg-white hover:border-[#FF9933]/50 hover:shadow-md'
                }`}
              >
                <div className="text-3xl mb-2">{meta.icon}</div>
                <div className="font-bold text-[#000080] text-base mb-1">
                  {meta.label}
                </div>
                <div className="text-xs text-gray-500">{meta.description}</div>
                {isSelected && (
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#FF9933]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {selectedEmotion && verses.length > 0 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing Gurbani for{' '}
              <span className="font-bold text-[#FF9933]">
                {EMOTION_META[selectedEmotion].icon}{' '}
                {EMOTION_META[selectedEmotion].label}
              </span>
            </p>
          </div>

          {verses.map((verse) => (
            <div
              key={verse.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Gurmukhi */}
              <div className="border-l-4 border-[#FF9933] pl-5 mb-5">
                <p className="gurmukhi-xl font-semibold text-[#000080] mb-3">
                  {verse.gurmukhi}
                </p>

                {/* Transliteration */}
                <p className="text-base md:text-lg text-gray-600 italic mb-2">
                  {verse.transliteration}
                </p>

                {/* Translation */}
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {verse.translation}
                </p>
              </div>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="bg-[#000080]/5 text-[#000080] px-3 py-1 rounded-full font-medium">
                    {verse.source}
                  </span>
                  <span>{verse.writer}</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Save button */}
                  <button
                    onClick={() => handleSave(verse.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      savedIds.has(verse.id)
                        ? 'bg-[#FFD700]/20 text-[#000080] border border-[#FFD700]'
                        : 'bg-gray-100 text-gray-600 hover:bg-[#FFD700]/10 hover:text-[#000080]'
                    }`}
                  >
                    {savedIds.has(verse.id) ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        Saved
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                        Save
                      </>
                    )}
                  </button>

                  {/* Read More link */}
                  {verse.ang > 0 && (
                    <a
                      href={`https://www.sikhitothemax.org/ang?ang=${verse.ang}&source=G`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[#000080] text-white hover:bg-[#000060] transition-colors"
                    >
                      Read More
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Show More / CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-lg font-semibold border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white transition-colors"
            >
              Show Different Verses
            </button>
            <Link
              href="/waitlist"
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FF9933] to-[#000080] text-white hover:opacity-90 transition"
            >
              Get the App -- Join Waitlist
            </Link>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#FF9933] to-[#000080] rounded-2xl p-8 md:p-12 text-center text-white mt-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Now Imagine This in the Gurdwara
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Point your phone at the projector. Get the shabad with translation
              in seconds. That is GurBani Finder.
            </p>
            <Link
              href="/waitlist"
              className="inline-block bg-white text-[#000080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!selectedEmotion && (
        <div className="text-center text-gray-400 py-12">
          <div className="text-5xl mb-4">&#x262C;</div>
          <p className="text-lg">
            Select an emotion above to discover Gurbani that speaks to your
            heart.
          </p>
        </div>
      )}
    </div>
  );
}
