// 'use client'

// import { useState } from 'react'
// import { Minus, Plus, Trash2 } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { useCart } from '@/context/cartcontext';

// interface CartItem {
//   id: number
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// export default function CartPage() {
  
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     { id: 1, name: "Ergonomic Chair", price: 199.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
//     { id: 2, name: "Wireless Mouse", price: 29.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
//     { id: 3, name: "Mechanical Keyboard", price: 89.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
//   ])

//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCartItems(items =>
//       items.map(item =>
//         item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
//       )
//     )
//   }

//   const removeItem = (id: number) => {
//     setCartItems(items => items.filter(item => item.id !== id))
//   }

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
//       <div className="grid gap-8 md:grid-cols-3">
//         <Card className="md:col-span-2">
//           <CardHeader>
//             <CardTitle>Cart Items</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {cartItems.map(item => (
//               <div key={item.id} className="flex items-center gap-4 py-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                 <div className="flex-grow">
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   >
//                     <Minus className="h-4 w-4" />
//                   </Button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   >
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Order Summary</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
//             <Separator className="my-4" />
//             <div className="flex justify-between font-semibold">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full">Proceed to Checkout</Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   )
// }