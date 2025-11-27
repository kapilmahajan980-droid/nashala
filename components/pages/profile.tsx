"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Phone, MapPin, LogOut, ArrowLeft } from "lucide-react"

export function Profile() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    phone: "+91-98765-43210",
    email: "sarah@example.com",
    addresses: [
      { id: 1, type: "Home", address: "123 Fashion Street, Mumbai" },
      { id: 2, type: "Work", address: "456 Business Plaza, Mumbai" },
    ],
  })

  const [editData, setEditData] = useState(profile)

  const handleLogout = () => {
    localStorage.clear()
    router.push("/")
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">My Profile</h2>
        </div>

        {/* Profile Info Card */}
        <Card className="p-5 rounded-2xl bg-card border-border/30">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center flex-shrink-0 shadow-md">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="w-full px-3 py-1 border border-border rounded-lg text-foreground font-bold text-lg"
                />
              ) : (
                <div>
                  <h3 className="text-lg font-bold text-foreground">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                </div>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="space-y-3 pt-4 border-t border-border">
              <div>
                <label className="text-xs font-semibold text-foreground uppercase">Phone</label>
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg text-foreground mt-1"
                />
              </div>
            </div>
          )}

          {!isEditing && (
            <div className="space-y-2 text-sm mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                {profile.phone}
              </div>
            </div>
          )}
        </Card>

        {/* Saved Addresses */}
        <div>
          <h3 className="font-bold text-foreground mb-3">Saved Addresses</h3>
          <div className="space-y-2">
            {profile.addresses.map((addr) => (
              <Card key={addr.id} className="p-3 rounded-2xl bg-card border-border/30">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{addr.type}</p>
                    <p className="text-xs text-muted-foreground mt-1">{addr.address}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing ? (
          <div className="flex gap-2 pt-2">
            <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl">
              Save Profile
            </Button>
            <Button onClick={() => setIsEditing(false)} variant="outline" className="flex-1 rounded-xl">
              Cancel
            </Button>
          </div>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full rounded-xl font-semibold">
              Edit Profile
            </Button>
            <Button
              onClick={handleLogout}
              className="w-full bg-destructive hover:bg-destructive/90 text-white rounded-xl font-semibold"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </>
        )}
      </div>
    </AppLayout>
  )
}
