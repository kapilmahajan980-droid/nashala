"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Welcome() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [otp, setOtp] = useState("")

  const handleGetOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number")
      return
    }
    setStep("otp")
  }

  const handleVerifyOTP = () => {
    if (!otp || otp.length < 4) {
      alert("Please enter valid OTP")
      return
    }
    localStorage.setItem("user", JSON.stringify({ phone: phoneNumber }))
    router.push("/")
  }

  const handleSkip = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        {/* Nashala Logo */}
        <div className="text-center space-y-2 pt-8">
          <div className="flex justify-center">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
              {/* Dress hanger left */}
              <path
                d="M12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8M12 8H16M12 8V18C12 20 13 22 14 24L14 28"
                stroke="#a73a3a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dress hanger right */}
              <path
                d="M24 8C24 6.89543 24.8954 6 26 6C27.1046 6 28 6.89543 28 8M24 8H28M24 8V18C24 20 25 22 26 24L26 28"
                stroke="#a73a3a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary tracking-wide" style={{ fontFamily: "georgia, serif" }}>
            Nashala
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest">COUTURE</p>
        </div>

        {/* Welcome Card */}
        <Card className="p-8 rounded-3xl bg-white border-border/30 shadow-lg space-y-6">
          {step === "phone" ? (
            <>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                <p className="text-sm text-muted-foreground">Enter your mobile number to get started.</p>
              </div>

              {/* Phone Input */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-foreground">Phone Number</label>
                <div className="flex gap-2">
                  <div className="w-16 px-3 py-3 border border-border rounded-xl bg-secondary/30 flex items-center justify-center text-foreground font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="98765 43210"
                    className="flex-1 px-4 py-3 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Get OTP Button */}
              <Button
                onClick={handleGetOTP}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
              >
                Get OTP
              </Button>

              {/* Dress Hangers Illustration */}
              <div className="flex justify-center gap-8 pt-4">
                <svg width="40" height="60" viewBox="0 0 30 40" fill="none">
                  <path
                    d="M10 5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5M10 5H12M10 5V12C10 14 10.5 16 11 17M12 5H13M12 5V12C12 14 11.5 16 11 17"
                    stroke="#a73a3a"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <ellipse cx="11" cy="22" rx="5" ry="8" fill="#a73a3a" opacity="0.6" />
                </svg>
                <svg width="40" height="60" viewBox="0 0 30 40" fill="none">
                  <path
                    d="M10 5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5M10 5H12M10 5V12C10 14 10.5 16 11 17M12 5H13M12 5V12C12 14 11.5 16 11 17"
                    stroke="#a73a3a"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <ellipse cx="11" cy="22" rx="5" ry="8" fill="#a73a3a" opacity="0.6" />
                </svg>
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Verify OTP</h2>
                <p className="text-sm text-muted-foreground">We've sent a code to +91 {phoneNumber}</p>
              </div>

              {/* OTP Input */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-foreground">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  maxLength={6}
                  className="w-full px-4 py-3 border border-border rounded-xl text-foreground text-center tracking-widest font-semibold placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Verify Button */}
              <Button
                onClick={handleVerifyOTP}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold text-base"
              >
                Verify & Continue
              </Button>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Didn't receive code?{" "}
                  <Button variant="ghost" size="sm" className="text-primary font-semibold text-xs p-0 h-auto">
                    Resend
                  </Button>
                </p>
              </div>
            </>
          )}

          {/* Skip Button */}
          <Button
            onClick={handleSkip}
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground rounded-xl"
          >
            Continue as Guest
          </Button>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our{" "}
          <button className="text-primary font-semibold hover:underline">Terms & Conditions</button>
        </p>
      </div>
    </div>
  )
}
