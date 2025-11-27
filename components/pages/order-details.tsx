"use client"

import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Phone, Calendar } from "lucide-react"

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  const router = useRouter()

  // Mock order data
  const orderData = {
    "1": {
      name: "Custom Lehenga",
      image: "/beautiful-lehenga-dress.jpg",
      status: "In Progress",
      amount: "₹3,500",
      orderDate: "2025-11-20",
      deliveryDate: "2025-12-05",
      description: "Beautiful traditional lehenga with intricate embroidery",
      address: "123 Fashion Street, Mumbai, India",
      phone: "+91-98765-43210",
      timeline: [
        { step: "Order Confirmed", date: "2025-11-20", completed: true },
        { step: "Design Approved", date: "2025-11-22", completed: true },
        { step: "Stitching In Progress", date: "2025-11-25", completed: false },
        { step: "Final Fitting", date: "2025-12-02", completed: false },
        { step: "Ready for Delivery", date: "2025-12-05", completed: false },
      ],
    },
    "2": {
      name: "Suit Alteration",
      image: "/professional-suit.jpg",
      status: "Ready",
      amount: "₹800",
      orderDate: "2025-11-15",
      deliveryDate: "2025-11-25",
      description: "Professional suit alteration and adjustments",
      address: "123 Fashion Street, Mumbai, India",
      phone: "+91-98765-43210",
      timeline: [
        { step: "Order Confirmed", date: "2025-11-15", completed: true },
        { step: "Alteration Started", date: "2025-11-16", completed: true },
        { step: "Ready for Pickup", date: "2025-11-25", completed: true },
      ],
    },
    "3": {
      name: "Blouse Design",
      image: "/elegant-blouse.jpg",
      status: "Completed",
      amount: "₹1,200",
      orderDate: "2025-11-10",
      deliveryDate: "2025-11-18",
      description: "Custom blouse with modern design",
      address: "123 Fashion Street, Mumbai, India",
      phone: "+91-98765-43210",
      timeline: [
        { step: "Order Confirmed", date: "2025-11-10", completed: true },
        { step: "Design Finalized", date: "2025-11-12", completed: true },
        { step: "Delivered", date: "2025-11-18", completed: true },
      ],
    },
  }

  const order = orderData[orderId as keyof typeof orderData] || orderData["1"]

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 pt-4">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="px-0">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold text-foreground">Order Details</h2>
        </div>

        {/* Order Image and Info */}
        <Card className="overflow-hidden">
          <img src={order.image || "/placeholder.svg"} alt={order.name} className="w-full h-48 object-cover" />
          <div className="p-4 space-y-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">{order.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{order.description}</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 w-fit">{order.status}</Badge>
            <div className="text-2xl font-bold text-primary">{order.amount}</div>
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 text-foreground">Order Timeline</h3>
          <div className="space-y-3">
            {order.timeline.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${item.completed ? "bg-primary" : "bg-border"}`} />
                  {index !== order.timeline.length - 1 && (
                    <div className={`w-0.5 h-8 ${item.completed ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
                <div className="pb-3">
                  <p className="font-medium text-foreground">{item.step}</p>
                  <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Contact Info */}
        <Card className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground">Delivery Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground">{order.address}</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Contact</p>
                <p className="text-muted-foreground">{order.phone}</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Estimated Delivery</p>
                <p className="text-muted-foreground">{new Date(order.deliveryDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </Card>

        <Button className="w-full bg-transparent" variant="outline">
          Contact Support
        </Button>
      </div>
    </AppLayout>
  )
}
