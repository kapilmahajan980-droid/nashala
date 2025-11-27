"use client"

import type React from "react"
import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function Measurements() {
  const router = useRouter()
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    shoulder: "",
    armhole: "",
    sleevLength: "",
    length: "",
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    if (Object.values(measurements).some((v) => !v)) {
      alert("Please fill all measurements")
      return
    }
    localStorage.setItem("measurements", JSON.stringify(measurements))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const measurementFields = [
    { label: "Bust (in)", name: "bust", placeholder: "34" },
    { label: "Waist (in)", name: "waist", placeholder: "28" },
    { label: "Shoulder (in)", name: "shoulder", placeholder: "14" },
    { label: "Armhole (in)", name: "armhole", placeholder: "8" },
    { label: "Sleeve Length (in)", name: "sleevLength", placeholder: "20" },
    { label: "Length (in)", name: "length", placeholder: "40" },
  ]

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Measurements</h2>
          <Button variant="ghost" size="sm" className="ml-auto text-primary text-xs">
            Guide →
          </Button>
        </div>

        {/* Help Card */}
        <Card className="bg-rose-50 border-rose-200 p-4 flex gap-3 rounded-2xl">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80">Take accurate measurements for perfect fitting</p>
        </Card>

        {/* Upper Body Section */}
        <div className="space-y-1">
          <h3 className="font-bold text-primary text-sm">Upper Body</h3>
          <div className="space-y-3">
            {measurementFields.slice(0, 3).map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1">{field.label}</label>
                <input
                  type="number"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={measurements[field.name as keyof typeof measurements]}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lower Body Section */}
        <div className="space-y-1">
          <h3 className="font-bold text-primary text-sm">Lower Body</h3>
          <div className="space-y-3">
            {measurementFields.slice(3).map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1">{field.label}</label>
                <input
                  type="number"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={measurements[field.name as keyof typeof measurements]}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {saved && (
          <Card className="bg-emerald-50 border-emerald-200 p-4 flex gap-2 items-center rounded-2xl">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <p className="text-sm text-emerald-800 font-medium">Measurements saved successfully!</p>
          </Card>
        )}

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
          size="lg"
        >
          Save Measurements
        </Button>
      </div>
    </AppLayout>
  )
}
