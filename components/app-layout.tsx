"use client"

import { type ReactNode, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { BottomNav } from "@/components/bottom-nav"
import { FloatingActionButton } from "@/components/floating-action-button"

export function AppLayout({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <div className="app-gradient flex flex-col min-h-screen w-full max-w-md mx-auto relative bg-white">
      <TopBar />
      <main className="flex-1 overflow-y-auto pb-24">{children}</main>
      <BottomNav currentPage={currentPage} />
      <FloatingActionButton />
    </div>
  )
}
