"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Gift, ShoppingBag, MessageSquare, BellIcon } from "lucide-react"

export function Notifications() {
  const router = useRouter()

  const notifications = [
    {
      id: 1,
      icon: Gift,
      title: "Exclusive Diwali Offer!",
      desc: "Get 20% off on our new bridal collection. Limited time only!",
      time: "1hr ago",
      category: "New",
      bg: "bg-rose-50",
    },
    {
      id: 2,
      icon: ShoppingBag,
      title: "Your Order is Shipped!",
      desc: "Your Bridal Lehenga (#NAS2025-245) is on the way.",
      time: "2hr ago",
      category: "New",
      bg: "bg-amber-50",
    },
    {
      id: 3,
      icon: MessageSquare,
      title: "Appointment Confirmed",
      desc: "Your tailoring appointment is confirmed for 25th November at 2:00 PM.",
      time: "3hr ago",
      category: "Earlier",
      bg: "bg-slate-50",
    },
    {
      id: 4,
      icon: BellIcon,
      title: "Message from Naha",
      desc: "Hi! Your custom blouse is ready for quality check.",
      time: "Yesterday",
      category: "Earlier",
      bg: "bg-slate-50",
    },
    {
      id: 5,
      icon: ShoppingBag,
      title: "Order Delivered",
      desc: "Your order #NAS2024-178 has been successfully delivered.",
      time: "2 days ago",
      category: "Earlier",
      bg: "bg-slate-50",
    },
  ]

  const newNotifications = notifications.filter((n) => n.category === "New")
  const earlierNotifications = notifications.filter((n) => n.category === "Earlier")

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-xl font-bold text-foreground">Notifications</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-primary text-xs font-bold">
            Clear
          </Button>
        </div>

        {/* New Notifications */}
        {newNotifications.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-foreground/60 uppercase mb-2">New</h3>
            <div className="space-y-2">
              {newNotifications.map((notif) => {
                const Icon = notif.icon
                return (
                  <Card key={notif.id} className={`p-4 rounded-2xl border-border/30 ${notif.bg}`}>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground text-sm">{notif.title}</h4>
                        <p className="text-xs text-foreground/70 mt-1">{notif.desc}</p>
                        <p className="text-xs text-muted-foreground mt-1.5">{notif.time}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Earlier Notifications */}
        {earlierNotifications.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-foreground/60 uppercase mb-2">Earlier</h3>
            <div className="space-y-2">
              {earlierNotifications.map((notif) => {
                const Icon = notif.icon
                return (
                  <Card key={notif.id} className={`p-4 rounded-2xl border-border/30 opacity-75 ${notif.bg}`}>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-foreground/50" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground text-sm">{notif.title}</h4>
                        <p className="text-xs text-foreground/60 mt-1">{notif.desc}</p>
                        <p className="text-xs text-muted-foreground mt-1.5">{notif.time}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}
