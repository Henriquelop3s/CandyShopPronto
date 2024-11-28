'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeaderCart from '@/components/ui/carticon';

export default function Component() {
  return (
    <header className="bg-primary text-primary-foreground z-10 fixed top-0 left-0 w-full bg-zinc-900 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold">
              Douceur
            </Link>
          </div>

          {/* Carrinho, sempre visível em todas as resoluções */}
          <div className="flex items-center">
            <HeaderCart /> {/* Renderizando o HeaderCart aqui */}
          </div>
        </div>
      </div>
    </header>
  );
}
