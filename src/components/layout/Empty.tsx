// components/layout/Empty.tsx
"use client"

import { PokemonWatcher } from "@/components/sections/Pokemon";

export function RightEmpty() {
  return (
    <div className="h-screen flex items-center justify-center">
      <PokemonWatcher />
    </div>
  )
}