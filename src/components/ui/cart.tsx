import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeaderCart({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount)

  const incrementCount = () => setCount(prev => prev + 1)

  return (
    <div className="relative inline-block">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={incrementCount}
        aria-label={`Shopping cart with ${count} items`}
      >
        <ShoppingCart className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </Button>
    </div>
  )
}