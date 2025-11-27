"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Services() {
  const router = useRouter()

  const categories = [
    { id: "lehenga", name: "Lehenga", count: "12+", image: "/purple-lehenga-bridal-dress.jpg" },
    { id: "blouse", name: "Blouse", count: "18+", image: "/burgundy-silk-embroidered-blouse.jpg" },
    { id: "suit", name: "Suit", count: "15+", image: "/formal-business-suit-tailored.jpg" },
    { id: "gown", name: "Gown", count: "14+", image: "/red-evening-ball-gown-dress.jpg" },
    { id: "alteration", name: "Alteration", count: "20+", image: "/clothing-fitting-alteration-service.jpg" },
    { id: "kidswear", name: "Kids Wear", count: "10+", image: "/colorful-children-clothing-designs.jpg" },
  ]

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold text-foreground">Services</h2>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-foreground/60">Select a category to explore our exclusive collection</p>
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["LEHENGA", "BLOUSE", "SUIT"].map((cat) => (
              <Button
                key={cat}
                variant="outline"
                size="sm"
                className="rounded-full text-xs font-semibold border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-all bg-card border-border/30 rounded-2xl group"
              onClick={() => router.push(`/booking`)}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-3 text-center">
                <p className="font-bold text-foreground text-sm">{category.name}</p>
                <p className="text-xs text-muted-foreground">{category.count} items</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <Card className="bg-gradient-to-r from-primary to-rose-700 rounded-2xl p-4 text-white mt-6 border-none shadow-lg">
          <h3 className="font-bold mb-1 text-sm">Exclusive Offer!</h3>
          <p className="text-xs mb-3 opacity-90">Get 20% off on your first custom design</p>
          <Button
            onClick={() => router.push("/booking")}
            className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
            size="sm"
          >
            Book Now
          </Button>
        </Card>
      </div>
    </AppLayout>
  )
}
