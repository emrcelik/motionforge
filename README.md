# MotionForge ✨

AI-powered animation & motion components for React/Next.js

Write a prompt → get production-ready, beautiful animations in seconds.


import { AIAnimate } from "motionforge";

<AIAnimate prompt="romantic floating hearts when clicked, red and pink">
  <button>Click for love ❤️</button>
</AIAnimate>

GitHub stars
GitHub sponsors

# Features

- Zero config – works with Next.js App Router & Pages Router
- Powered by OpenAI, Claude or Gemini (bring your own API key)
- 50+ hand-crafted base animations (romantic, loading, scroll, hover…)
- Copy-paste components like shadcn/ui
- Sponsor-only: Unlimited cloud generation, premium prompt library, private Discord

# Quick Start


npm install emrcelik/motionforge

yarn add emrcelik/motionforge

import { FloatingHearts, HeartbeatButton, AIAnimate } from "motionforge";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-8">
      <FloatingHearts count={15} />

      <HeartbeatButton>
        <button className="px-8 py-4 bg-red-600 text-white rounded-xl text-2xl">
          Click for heartbeat ❤️
        </button>
      </HeartbeatButton>

      <AIAnimate prompt="confetti explosion with pink hearts when clicked">
        <button className="px-8 py-4 bg-pink-600 text-white rounded-xl text-2xl">
          AI Magic
        </button>
      </AIAnimate>
    </div>
  );
}

# Live Demo

https://motionforge.vercel.app

# Sponsors ❤️

Bu proje tamamen açık kaynak ve ücretsiz. Geliştirmeye devam edebilmem için desteğinizi bekliyorum:
GitHub Sponsors

# Tiers
- $5/mo → Name in README + eternal love
- $20/mo → Private Discord + premium prompt pack + early access
- $100+/mo → Company logo on README + priority features

# Roadmap

- 50+ built-in animations
- Cloud-hosted AI generator (no API key needed)
- Figma → MotionForge plugin
- Vue / Svelte support

# Made with ❤️ in Turkey

Star’ı bas, sevgilisi olan herkese paylaş → birlikte büyütelim!
