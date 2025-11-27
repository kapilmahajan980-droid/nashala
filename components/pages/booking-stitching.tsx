"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Camera } from "lucide-react"

export function BookingSitching() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    garment: "",
    referenceImage: null as string | null,
    date: "",
    time: "",
    address: "",
  })
  const [confirmed, setConfirmed] = useState(false)

  const garmentTypes = ["Lehenga", "Blouse", "Suit", "Gown", "Saree", "Kurta", "Custom Design", "Fabric Selection"]

  const timeSlots = ["10:00 AM", "10:30 AM", "2:00 PM", "2:30 PM"]

  const handleNext = () => {
    if (step === 1 && !booking.garment) {
      alert("Please select a garment type")
      return
    }
    if (step === 2 && !booking.date) {
      alert("Please select a date")
      return
    }
    if (step === 3 && (!booking.time || !booking.address)) {
      alert("Please fill all details")
      return
    }
    if (step < 3) {
      setStep(step + 1)
    } else {
      setConfirmed(true)
    }
  }

  if (confirmed) {
    return (
      <AppLayout>
        <div className="p-4 space-y-4 pb-28">
          <div className="flex items-center gap-3 pt-2">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-xl font-bold text-foreground">Appointment Confirmed</h2>
          </div>

          <Card className="p-6 text-center space-y-4 rounded-2xl bg-card border-border/30">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Booking Confirmed!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Your tailoring appointment has been successfully booked
              </p>
            </div>

            <div className="bg-secondary/40 rounded-xl p-4 space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-xs font-semibold text-foreground/60 uppercase">Garment</span>
                <span className="font-semibold text-foreground">{booking.garment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-semibold text-foreground/60 uppercase">Date & Time</span>
                <span className="font-semibold text-foreground">
                  {booking.date} at {booking.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-semibold text-foreground/60 uppercase">Order ID</span>
                <span className="font-mono text-primary font-bold">#NAS-2025-001</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">We'll reach out to confirm details</p>
          </Card>

          <Button
            onClick={() => router.push("/orders")}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold"
          >
            View My Orders
          </Button>
          <Button onClick={() => router.push("/")} variant="outline" className="w-full rounded-xl font-semibold">
            Back to Home
          </Button>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (step > 1) setStep(step - 1)
              else router.back()
            }}
            className="text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Book Appointment</h2>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-2 flex-1 rounded-full ${s <= step ? "bg-primary" : "bg-border"}`} />
          ))}
        </div>

        {/* Step 1: Select Garment */}
        {step === 1 && (
          <div className="space-y-3">
            <h3 className="font-bold text-foreground text-base">Select Garment</h3>
            <div className="grid grid-cols-2 gap-2">
              {garmentTypes.map((garment) => (
                <Button
                  key={garment}
                  onClick={() => setBooking({ ...booking, garment })}
                  variant={booking.garment === garment ? "default" : "outline"}
                  className={`text-sm py-3 rounded-xl font-semibold ${
                    booking.garment === garment
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  {garment}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Upload Reference Image & Select Date */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-base">Selected Garment: {booking.garment}</h3>

            {/* Upload Reference Image */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Upload Reference Image</label>
              <Card className="border-2 border-dashed border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center min-h-32 bg-secondary/20 cursor-pointer hover:border-primary/50 transition-colors">
                <Camera className="w-8 h-8 text-primary/60 mb-2" />
                <p className="text-sm font-medium text-foreground text-center">Tap to upload</p>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  Add images of your material or reference design
                </p>
              </Card>
            </div>

            {/* Select Date */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Select Date & Time</label>
              <div className="space-y-2">
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Time & Address */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Select Time Slot</label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    onClick={() => setBooking({ ...booking, time: slot })}
                    variant={booking.time === slot ? "default" : "outline"}
                    className={`rounded-xl font-medium ${
                      booking.time === slot
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Delivery Address</label>
              <textarea
                value={booking.address}
                onChange={(e) => setBooking({ ...booking, address: e.target.value })}
                placeholder="Enter your complete address"
                className="w-full px-4 py-3 border border-border rounded-xl text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                rows={3}
              />
            </div>
          </div>
        )}

        <Button
          onClick={handleNext}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
          size="lg"
        >
          {step === 3 ? "Confirm Appointment →" : "Continue →"}
        </Button>
      </div>
    </AppLayout>
  )
}
