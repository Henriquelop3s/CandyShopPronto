'use client';

import { useCart } from '@/context/cartcontext'; 
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, addToCart, removeItem, updateQuantity, total } = useCart();

  // Verifica se os valores estão disponíveis antes de tentar renderizar
  if (cartItems === undefined || total === undefined) {
    return <p>Erro ao carregar o carrinho. Tente novamente mais tarde.</p>;
  }

  const createWhatsAppMessage = () => {
    let message = 'Olá,%20gostaria%20de%20fazer%20um%20pedido%20dos%20seguintes%20itens:%20';
    cartItems.forEach((item) => {
      message += `${item.name}%20(x${item.quantity})%20-%20R$${(item.price * item.quantity).toFixed(2)}%20`; 
    });
    message += `%0ATotal:%20R$${total.toFixed(2)}`;
    return `https://wa.me/5551998601535?text=${message}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/">
          <Button variant="ghost" size="sm">← Voltar para a Página Principal</Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Seu Carrinho 🛒</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Itens no Carrinho</CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 py-4 flex-wrap justify-between">
  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
  <div className="flex-grow">
    <h3 className="font-semibold">{item.name}</h3>
    <p className="text-sm text-gray-500">R${item.price.toFixed(2)}</p>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
      <Minus className="h-4 w-4" />
    </Button>
    <span className="w-8 text-center">{item.quantity}</span>
    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
      <Plus className="h-4 w-4" />
    </Button>
  </div>
  <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)} className="mt-2 md:mt-0">
    <Trash2 className="h-4 w-4" />
  </Button>
</div>

              ))
            ) : (
              <p>Seu Carrinho está vazio 🫤</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>R${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Entrega</span>
              <span>Último Prédio</span>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>R${total.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <a href={createWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
              <Button className="w-full">Processar Pedido</Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CartPage;
