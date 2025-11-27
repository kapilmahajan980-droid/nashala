"use client"

import { useRouter } from "next/navigation"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push("/booking")}
      className="fixed bottom-28 right-4 rounded-full w-14 h-14 shadow-lg hover:shadow-xl z-40 max-w-[calc(100vw-2rem)]"
      style={{
        right: "max(1rem, calc(50vw - 10rem))",
      }}
    >
      <Plus className="w-6 h-6" />
    </Button>
  )
}
