"use client"

import { OrderDetails } from "@/components/pages/order-details"

export default function Page({ params }: { params: { id: string } }) {
  return <OrderDetails orderId={params.id} />
}
