import React, { useMemo, useState } from 'react';
import { PrismaticBurst, type AnimationType } from './Component';

/**
 * Design-level integration of PrismaticBurst:
 * - Uses the burst as a hero background layer.
 * - Adds a subtle glass overlay to anchor text content.
 * - Exposes a few controls so the design team can tune motion quickly.
 */
export default function App() {
  const [animationType, setAnimationType] = useState<AnimationType>('rotate3d');
  const [paused, setPaused] = useState(false);

  const palette = useMemo(() => ['#ff007a', '#4d3dff', '#ffffff', '#00d2ff'], []);

  return (
    <div className="min-h-screen w-full bg-[#0D0D10] p-6 md:p-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="relative aspect-video overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <PrismaticBurst
            animationType={animationType}
            intensity={1.8}
            speed={0.4}
            distort={1.2}
            paused={paused}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={32}
            mixBlendMode="lighten"
            colors={palette}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />

          <div className="absolute inset-0 flex items-end p-8 md:p-10">
            <div className="max-w-xl rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-md">
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Prismatic Burst</h1>
              <p className="mt-2 text-sm text-white/70 md:text-base">
                Interactive WebGL color burst integrated as a premium hero background with minimal glass UI layering.
              </p>
            </div>
          </div>
        </section>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <h2 className="text-lg font-medium">Design Controls</h2>
          <p className="mt-1 text-sm text-white/60">Use these to test behavior before hard-coding final values.</p>

          <div className="mt-5 space-y-4 text-sm">
            <label className="block">
              <span className="mb-2 block text-white/80">Animation Mode</span>
              <select
                className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2"
                value={animationType}
                onChange={e => setAnimationType(e.target.value as AnimationType)}
              >
                <option value="rotate">rotate</option>
                <option value="rotate3d">rotate3d</option>
                <option value="hover">hover</option>
              </select>
            </label>

            <label className="flex items-center justify-between rounded-lg border border-white/15 bg-black/20 px-3 py-2">
              <span>Pause Animation</span>
              <input type="checkbox" checked={paused} onChange={e => setPaused(e.target.checked)} />
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}
