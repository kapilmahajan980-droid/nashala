"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Orders() {
  const router = useRouter()

  const orders = [
    {
      id: "1",
      name: "Bridal Lehenga",
      status: "Estimated Delivery 25th Dec",
      statusBg: "bg-amber-50",
      statusColor: "text-amber-900",
      date: "Nov 20, 2024",
      times: {
        Requested: "Nov 20, 2024",
        "Measurement Complete": "Oct 6, 2024",
        "Fabric Collected": "Oct 7, 2024",
        Stitching: "Oct 20, 2024",
      },
      image: "/purple-lehenga-bridal-dress.jpg",
    },
    {
      id: "2",
      name: "Custom Blouse",
      status: "Ready for Delivery",
      statusBg: "bg-emerald-50",
      statusColor: "text-emerald-900",
      date: "Nov 15, 2024",
      image: "/maroon-silk-embroidered-blouse.jpg",
    },
    {
      id: "3",
      name: "Suit Tailoring",
      status: "Delivered",
      statusBg: "bg-slate-50",
      statusColor: "text-slate-900",
      date: "Nov 10, 2024",
      image: "/formal-business-suit-tailored.jpg",
    },
  ]

  return (
    <AppLayout>
      <div className="p-4 space-y-4 pb-28">
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-primary">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-foreground">Order Tracking</h2>
        </div>

        <div className="space-y-3">
          {orders.map((order) => (
            <Card
              key={order.id}
              className="overflow-hidden hover:shadow-md transition-all cursor-pointer bg-card border-border/30 rounded-2xl"
              onClick={() => router.push(`/orders/${order.id}`)}
            >
              {/* Order Header */}
              <div className="flex gap-3 p-4">
                <div className="relative overflow-hidden w-20 h-20 flex-shrink-0">
                  <img
                    src={order.image || "/placeholder.svg"}
                    alt={order.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{order.name}</h3>
                    <div
                      className={`${order.statusBg} ${order.statusColor} text-xs font-semibold px-2 py-1 rounded-full inline-block mt-2`}
                    >
                      {order.status}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className={`border-t border-border/30 p-4 ${order.statusBg}`}>
                <div className="space-y-2 text-xs">
                  {Object.entries(order.times || {}).map(([step, date], idx) => (
                    <div key={step} className="flex gap-2 items-start">
                      <div className={`w-2.5 h-2.5 rounded-full mt-1 ${idx <= 3 ? "bg-primary" : "bg-border"}`} />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{step}</p>
                        <p className="text-muted-foreground text-xs">{date}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-2 items-start opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full mt-1 bg-border" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Quality Check</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full mt-1 bg-border" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Ready For Delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full mt-1 bg-border" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Need Help Banner */}
        <Card className="bg-rose-50 border-rose-200 rounded-2xl p-4 border">
          <p className="text-sm font-semibold text-primary mb-2">Need Help?</p>
          <p className="text-xs text-foreground/70 mb-3">Contact our support team for any queries about your order</p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg text-xs font-semibold">
            Get Support
          </Button>
        </Card>

        {/* New Order Button */}
        <Button
          onClick={() => router.push("/booking")}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-semibold"
        >
          Place New Order
        </Button>
      </div>
    </AppLayout>
  )
}
