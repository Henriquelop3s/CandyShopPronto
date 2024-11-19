'use client';

import { useCart } from '@/context/cartcontext'; 
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';  

export default function HeaderCart() {
  const { cartItems } = useCart();

  // Calcula o número total de itens no carrinho somando as quantidades
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative inline-block">
      {/* Usando o Link do Next.js */}
      <Link href="/cart">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={`Shopping cart with ${itemCount} items`}
        >
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
}
