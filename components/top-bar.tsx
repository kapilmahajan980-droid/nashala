"use client"

import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
            {/* Dress hanger left */}
            <path
              d="M12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8M12 8H16M12 8V18C12 20 13 22 14 24L14 28"
              stroke="#A73A3A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dress hanger right */}
            <path
              d="M24 8C24 6.89543 24.8954 6 26 6C27.1046 6 28 6.89543 28 8M24 8H28M24 8V18C24 20 25 22 26 24L26 28"
              stroke="#A73A3A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dress shape left */}
            <path
              d="M13 10C13 10 12 14 12 18C12 22 13 24 14 26L14 28M15 10C15 10 16 14 16 18C16 22 15 24 14 26"
              stroke="#A73A3A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
            {/* Dress shape right */}
            <path
              d="M25 10C25 10 24 14 24 18C24 22 25 24 26 26L26 28M27 10C27 10 28 14 28 18C28 22 27 24 26 26"
              stroke="#A73A3A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary tracking-wide" style={{ fontFamily: "georgia, serif" }}>
              Nashala
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest">COUTURE</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={() => router.push("/admin")} className="text-foreground">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
