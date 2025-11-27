"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Scissors, Ruler, Palette, ShoppingBag, ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function Home() {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        setCanScroll(scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth)
      }
    }
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const quickActions = [
    { icon: Scissors, label: "Book Stitching", path: "/booking" },
    { icon: Ruler, label: "Measurements", path: "/measurements" },
    { icon: Palette, label: "Fabrics", path: "/fabric" },
    { icon: ShoppingBag, label: "My Orders", path: "/orders" },
  ]

  const categories = [
    { name: "Blouse", image: "/blouse-A85VByK5b1cRRVzj.png" },
    { name: "Lehenga", image: "/lehenga-mnlJrkjy9xHr0Evg.png" },
    { name: "Gown", image: "/gown-m2WEDkwbkpTNpevl.png" },
    { name: "Kurti", image: "/kurti-YD0wN5kj6WcVLZBn.png" },
    { name: "Anarkali", image: "/anarkali-frok-Yyv0MLbLnzfR6v4K.png" },
    { name: "Kids Wear", image: "/children-party-dress.jpg" },
  ]

  const featuredServices = [
    {
      title: "Premium Lehenga Stitching",
      desc: "Custom bridal lehenga with intricate embroidery",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/A1a5e9NEzDC5pQ7Q/blouse-A85VByK5b1cRRVzj.webp",
    },
    {
      title: "Elegant Gown Tailoring",
      desc: "Western gowns tailored to perfection",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/A1a5e9NEzDC5pQ7Q/kurti-YD0wN5kj6WcVLZBn.webp",
    },
    {
      title: "Designer Blouse Creation",
      desc: "Embroidered blouses with traditional patterns",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/A1a5e9NEzDC5pQ7Q/3-YbNJr52ZyzcenLal.webp",
    },
    {
      title: "Anarkali Customization",
      desc: "Ethnic wear with modern tailoring",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/A1a5e9NEzDC5pQ7Q/anarkali-frok-Yyv0MLbLnzfR6v4K.webp",
    },
  ]

  return (
    <AppLayout>
      {/* Hero Banner */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <img src="/images/main-image.jpeg" alt="Tailor Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-start justify-end">
          <div className="p-6 w-full">
            
            
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-8 pb-28">
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.label}
                onClick={() => router.push(action.path)}
                className="h-32 flex flex-col gap-3 py-4 px-3 bg-primary hover:bg-primary/90 text-white rounded-3xl shadow-lg active:scale-95 transition-all font-semibold"
              >
                <Icon className="w-8 h-8" />
                <span className="text-xs text-center leading-tight">{action.label}</span>
              </Button>
            )
          })}
        </div>

        

        {/* Popular Categories */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Popular Categories</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <Card
                key={category.name}
                onClick={() => router.push("/booking")}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all border-0 rounded-3xl bg-white group"
              >
                <div className="relative h-32 overflow-hidden bg-secondary">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lehenga-mnlJrkjy9xHr0Evg-HhlrOpsY4aBbhxA2W9LnReCo74UeOV.png"
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-foreground">{category.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="relative rounded-3xl overflow-hidden h-auto">
          <img
            src="/images/our-process-ar03lwgqj9sadbgb.png"
            alt="Our Process"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        {/* Featured Services Carousel */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Featured Services</h3>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {featuredServices.map((service, idx) => (
              <Card
                key={idx}
                onClick={() => router.push("/booking")}
                className="flex-shrink-0 w-80 overflow-hidden cursor-pointer hover:shadow-xl transition-all border-0 rounded-3xl bg-white group"
              >
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="font-bold text-foreground text-base">{service.title}</p>
                  <p className="text-xs text-muted-foreground mt-3 mb-4">{service.desc}</p>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    Book Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tailoring Studio Preview */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">Meet Our Studio</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden rounded-3xl border-0 cursor-pointer hover:shadow-lg transition-all">
              <img
                src="/images/untitled-design-ar03eg67ercb6ney.png"
                alt="Tailor Workspace"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
            <Card className="overflow-hidden rounded-3xl border-0 cursor-pointer hover:shadow-lg transition-all">
              <img
                src="/images/untitled-design-djobed6lwoh7qynj.png"
                alt="Sewing Machine Setup"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
