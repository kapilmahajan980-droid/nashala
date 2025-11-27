"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star } from "lucide-react"

export function Review() {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating")
      return
    }
    setSubmitted(true)
    setTimeout(() => router.back(), 2000)
  }

  if (submitted) {
    return (
      <AppLayout>
        <div className="p-4 space-y-4 pb-28 flex flex-col items-center justify-center min-h-96">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Star className="w-8 h-8 text-emerald-600 fill-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Thank You!</h3>
            <p className="text-sm text-muted-foreground">Your review has been submitted</p>
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Rate & Review</h2>
        </div>

        {/* Product Card */}
        <Card className="p-4 rounded-2xl bg-card border-border/30">
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-xl bg-secondary overflow-hidden flex-shrink-0">
              <img src="/purple-lehenga-bridal-dress.jpg" alt="Lehenga" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-sm">Heritage Lehenga</h3>
              <p className="text-xs text-muted-foreground mt-1">Jome, Glitt Liptheria Poppins</p>
            </div>
          </div>
        </Card>

        {/* Rating Section */}
        <div className="space-y-3">
          <h3 className="font-bold text-foreground">Rate Your Item</h3>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="transition-transform hover:scale-110">
                <Star className={`w-8 h-8 ${star <= rating ? "fill-primary text-primary" : "text-border"}`} />
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center">
            {rating > 0 ? `${rating} Stars` : "Select rating"}
          </p>
        </div>

        {/* Review Text */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">Share your thoughts...</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="How was your experience with us?"
            maxLength={115}
            className="w-full px-4 py-3 border border-border rounded-xl text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            rows={3}
          />
          <p className="text-xs text-muted-foreground text-right">{review.length}/115</p>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
          size="lg"
        >
          Submit Review
        </Button>
      </div>
    </AppLayout>
  )
}
