"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Wallet } from "lucide-react"

export function Payment() {
  const router = useRouter()

  const orderSummary = {
    item: "Heritage Lehenga",
    price: "₹50,000",
    advance: "₹25,000",
    desc: "Advance Payment (50%)",
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Payment Details</h2>
        </div>

        {/* Order Summary */}
        <Card className="p-4 rounded-2xl bg-secondary/30 border-border/30">
          <h3 className="font-bold text-foreground text-sm mb-3">Order Summary</h3>
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-lg bg-secondary overflow-hidden flex-shrink-0">
              <img src="/purple-lehenga-bridal-dress.jpg" alt="Lehenga" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground text-sm">{orderSummary.item}</p>
              <p className="text-xs text-muted-foreground mt-1">{orderSummary.desc}</p>
              <p className="text-sm font-bold text-primary mt-2">{orderSummary.price}</p>
            </div>
          </div>
        </Card>

        {/* Payment Method */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground text-sm">Select Payment Method</h3>
          <Card className="p-4 rounded-2xl border-2 border-primary bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">Pay with UPI / Razorpay</p>
                <p className="text-xs text-muted-foreground mt-0.5">Secure & instant payment</p>
              </div>
            </div>
          </Card>
        </div>

        {/* UPI ID */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">UPI ID</label>
          <input
            type="text"
            placeholder="Enter your UPI ID"
            className="w-full px-4 py-3 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Price Breakdown */}
        <Card className="p-4 rounded-2xl bg-card border-border/30 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/70">Total Price</span>
            <span className="font-semibold text-foreground">₹50,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/70">Advance (50%)</span>
            <span className="font-semibold text-foreground">₹25,000</span>
          </div>
          <div className="border-t border-border pt-2 mt-2 flex justify-between text-base">
            <span className="font-bold text-foreground">Pay Advance</span>
            <span className="font-bold text-primary">₹25,000</span>
          </div>
        </Card>

        {/* Payment Button */}
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
          size="lg"
        >
          Pay Advance: ₹25,000
        </Button>

        <p className="text-xs text-muted-foreground text-center">Powered by Razorpay</p>
      </div>
    </AppLayout>
  )
}
