"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload } from "lucide-react"

export function FabricSelection() {
  const router = useRouter()

  const nashalaFabrics = [
    { id: 1, name: "Silk", image: "/placeholder.svg?key=silk1" },
    { id: 2, name: "Cotton Blend", image: "/placeholder.svg?key=cotton1" },
    { id: 3, name: "Georgette", image: "/placeholder.svg?key=georgette1" },
  ]

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Fabric Selection</h2>
        </div>

        {/* Upload Own Fabric */}
        <Card className="p-4 rounded-2xl bg-card border-border/30">
          <h3 className="font-bold text-foreground text-sm mb-3">I Have My Own Fabric</h3>
          <Card className="border-2 border-dashed border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center bg-secondary/20 cursor-pointer hover:border-primary/50 transition-colors">
            <Upload className="w-8 h-8 text-primary/60 mb-2" />
            <p className="text-sm font-medium text-foreground">Upload Photos</p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              of your material for our tailors to work with
            </p>
          </Card>
        </Card>

        {/* Browse Nashala Fabrics */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-sm">Use Nashala Fabric</h3>
          <p className="text-xs text-muted-foreground">
            Explore our curated collection of premium, high-quality fabrics
          </p>

          <div className="grid grid-cols-3 gap-2">
            {nashalaFabrics.map((fabric) => (
              <Card
                key={fabric.id}
                className="overflow-hidden rounded-xl cursor-pointer hover:shadow-md transition-all bg-card border-border/30 group"
              >
                <div className="relative overflow-hidden h-24">
                  <img
                    src={fabric.image || "/placeholder.svg"}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-foreground">{fabric.name}</p>
                </div>
              </Card>
            ))}
          </div>

          <Button
            onClick={() => router.push("/services")}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold"
          >
            Browse Catalogue
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
