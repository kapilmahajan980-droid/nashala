"use client"

import { useRouter, usePathname } from "next/navigation"
import { Home, Shirt, ShoppingBag, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "services", label: "Services", icon: Shirt, path: "/services" },
  { id: "orders", label: "Orders", icon: ShoppingBag, path: "/orders" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
  { id: "admin", label: "Admin", icon: Settings, path: "/admin" },
]

export function BottomNav({ currentPage }: { currentPage: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border z-50 max-w-md mx-auto shadow-xl">
      <div className="flex items-center justify-around h-20">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center justify-center gap-1 h-full flex-1 rounded-none transition-all ${
                active
                  ? "text-primary bg-secondary/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
              }`}
            >
              <Icon className={`w-5 h-5 transition-all ${active ? "fill-primary" : ""}`} />
              <span className="text-xs font-semibold">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
