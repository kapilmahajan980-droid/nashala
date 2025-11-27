"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export function Admin() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (credentials.email === "admin@tailor.com" && credentials.password === "admin123") {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError("Invalid credentials")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCredentials({ email: "", password: "" })
  }

  if (!isLoggedIn) {
    return (
      <AppLayout>
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold text-foreground pt-4">Admin Panel</h2>
          <p className="text-sm text-muted-foreground">Secure login required</p>

          <Card className="p-6 space-y-4">
            {error && (
              <Card className="bg-red-50 border-red-200 p-3 flex gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-800">{error}</p>
              </Card>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                placeholder="admin@tailor.com"
                className="w-full px-3 py-2 border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-border rounded-lg text-foreground"
              />
            </div>

            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>

            <p className="text-xs text-center text-muted-foreground">Demo: admin@tailor.com / admin123</p>
          </Card>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold text-foreground pt-4">Admin Dashboard</h2>

        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-primary">24</p>
            <p className="text-sm text-muted-foreground">Total Orders</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-accent">8</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">₹45,000</p>
            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">156</p>
            <p className="text-sm text-muted-foreground">Total Customers</p>
          </Card>
        </div>

        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground">Recent Orders</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Custom Lehenga - Sarah</span>
              <span className="text-primary font-medium">In Progress</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Suit Alteration - John</span>
              <span className="text-green-600 font-medium">Ready</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Blouse Design - Maya</span>
              <span className="text-gray-600 font-medium">Completed</span>
            </div>
          </div>
        </Card>

        <Button onClick={handleLogout} variant="destructive" className="w-full">
          Logout
        </Button>
      </div>
    </AppLayout>
  )
}
