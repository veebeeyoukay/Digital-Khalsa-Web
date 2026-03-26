# GurBani Finder — Digital Khalsa Web

"Shazam for Kirtan" — find, feel, and connect with Gurbani. Free forever. No ads. Open source seva for the Sangat.

## What It Does

A web platform that helps anyone discover Sikh scripture through emotion, text, or live kirtan streams. Built as seva (selfless service) by [125kCyberSingh](https://x.com/125kcybersingh).

> "I share this because I need to hear it, not because you need to hear it."

### Features

- **Find Gurbani by Emotion** — Select how you're feeling (Peaceful, Grateful, Seeking Strength, In Pain, Joyful, Anxious, Hopeful, Grieving) and get matched shabads with Gurmukhi, transliteration, and English translation
- **Live Gurdwara Streams** — Watch kirtan and katha from gurdwaras worldwide, auto-discovered and updated every 30 seconds via ISR
- **Waitlist Signup** — Join the GurBani Finder app waitlist with referral tracking
- **Transparency Page** — Public changelog, timesheet, and feature request system

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Netlify |
| **Automation** | n8n (stream discovery every 15 min) |

## Quick Start

```bash
git clone https://github.com/veebeeyoukay/Digital-Khalsa-Web.git
cd Digital-Khalsa-Web
npm install

# Optional: configure Supabase (app builds without it)
cp .env.example .env.local
# Fill in: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The app builds and runs without Supabase configured — live streams and waitlist features will just return empty data.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, "Shazam for Kirtan" explainer, emotion teaser |
| `/find` | Emotion-Based Gurbani Finder — 30 curated shabads across 8 emotions |
| `/streams` | Live gurdwara streaming aggregator (ISR, revalidates every 30s) |
| `/streams/[id]` | Individual stream player (YouTube/Facebook embed) |
| `/about` | 125kCyberSingh story, seva mission, open source commitment |
| `/waitlist` | Waitlist signup with referral source tracking |
| `/transparency` | Public changelog, timesheet, feature requests |
| `/features` | GurBani Finder app feature showcase |
| `/resources` | Educational resources |
| `/contact` | Contact information |
| `/privacy` | Privacy policy |

## Project Structure

```
Digital-Khalsa-Web/
├── app/
│   ├── layout.tsx            # Root layout, metadata, Navigation + Footer
│   ├── page.tsx              # Landing page
│   ├── find/page.tsx         # Emotion-based Gurbani finder
│   ├── streams/
│   │   ├── page.tsx          # Live streams grid (ISR, revalidate: 30)
│   │   └── [id]/page.tsx     # Stream player
│   ├── about/page.tsx        # About + mission
│   ├── waitlist/page.tsx     # Waitlist signup
│   ├── transparency/page.tsx # Public dev transparency
│   └── globals.css           # Brand colors, Gurmukhi font classes
├── components/
│   ├── Navigation.tsx        # Responsive navbar with active route detection
│   ├── Footer.tsx            # 4-column footer with site links
│   ├── EmotionFinder.tsx     # Interactive emotion → shabad matcher
│   ├── EmotionGurbaniFinder.tsx  # Supabase-backed emotion finder
│   ├── WaitlistForm.tsx      # Waitlist form with referral tracking
│   ├── StreamCard.tsx        # Stream preview card
│   ├── StreamPlayer.tsx      # Embedded video player
│   └── transparency/         # Changelog, Timesheet, FeatureRequests
├── data/
│   └── gurbani.ts            # 30 curated shabads with emotion tags
├── lib/
│   ├── supabase.ts           # Supabase client + TypeScript types
│   └── streams.ts            # Stream/gurdwara query helpers
├── supabase/
│   └── migrations/           # Database schema + RLS policies
├── .github/
│   └── workflows/
│       └── ci.yml            # Build + lint on push/PR
└── package.json
```

## Brand Guidelines

| Element | Value |
|---------|-------|
| **Saffron** | `#FF9933` — Primary actions, highlights (Khalsa flag) |
| **Navy** | `#000080` — Text, icons (depth, trust) |
| **Gold** | `#FFD700` — Accents, success (Golden Temple) |
| **Gurmukhi Font** | Noto Sans Gurmukhi / Mukta Mahee — minimum 18pt, 1.6x line height, never bold |

CSS utility classes available: `.gurmukhi`, `.gurmukhi-lg`, `.gurmukhi-xl`, `.gurmukhi-2xl`

## Database Schema

### Gurbani Data (Supabase)
- `shabads` — Hymns with metadata (source, writer, raag, ang)
- `lines` — Individual verses (Gurmukhi, transliteration, translation)
- `emotion_tags` — Emotion-to-shabad mappings

### Streaming
- `gurdwaras` — Temple metadata (name, location, social links)
- `streams` — Live stream URLs, status, viewer counts
- Auto-discovered by n8n every 15 minutes

### User Data
- `user_profiles` — Waitlist signups with referral codes
- `changelog_entries`, `timesheet_entries`, `feature_requests` — Transparency page

## Deployment

### Netlify (Production)

The site deploys to Netlify with the Next.js plugin:

```bash
npm run build    # Build command
# Publish dir: .next
```

Set environment variables in the Netlify dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### GitHub Actions CI

On every push to `main` and on pull requests, the CI workflow:
1. Installs dependencies
2. Runs ESLint
3. Runs production build
4. Verifies no TypeScript errors

## Key Design Decisions

- **Anonymous-first**: No auth required to browse streams or find Gurbani
- **ISR for streams**: Server-side rendering with 30s revalidation, no client polling
- **Builds without env vars**: Supabase client uses safe fallbacks so CI and preview deploys work
- **Offline data fallback**: `/find` page uses local curated data (no DB required)
- **Cultural respect**: All Gurmukhi rendered at 18pt+ with proper line height, never bold

## Related Repositories

- **iOS App**: [digital-khalsa-ios](https://github.com/veebeeyoukay/digital-khalsa-ios) — SwiftUI native app
- **Upstream**: [125kcybersingh/Digital-Khalsa-Web](https://github.com/125kcybersingh/Digital-Khalsa-Web)

## Contributing

This is a seva project — contributions welcome. Please respect the cultural guidelines in the brand section.

1. Fork the repo
2. Create a feature branch
3. Make changes with clear commit messages
4. Submit a PR

## License

MIT — Free and open source. Built as seva for the Sangat.

---

**Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh**
