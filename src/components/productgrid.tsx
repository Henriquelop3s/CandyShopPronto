'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/cartcontext"; // Importação do contexto, se estiver usando


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 3, name: "Leite Ninho", price: 3.00, image: "https://cdn.awsli.com.br/2500x2500/761/761999/produto/46031789/80c5b39249.jpg" },
  { id: 4, name: "Negresco", price: 3.00, image: "https://images.tcdn.com.br/img/img_prod/1079370/embalgem_para_trufa_sabores_biscoito_14_5x15_5cm_2359_1_d6385b86e498df86bb43602842dec67c.png" },
  { id: 5, name: "Maracujá", price: 3.00, image: "https://images.tcdn.com.br/img/img_prod/812131/embalagem_para_trufa_sabor_maracuja_185_1_e3b914b29df0188de06520e9214528ad.jpg" },
  { id: 6, name: "Cone Ninho", price: 5.00, image: "https://chocolatesgrazigrazi.com.br/cdn/shop/files/Capturadetela14.06.2023as11.07.13AM_1728x.png?v=1686751668" },
  { id: 7, name: "Cone Negresco", price: 5.00, image: "https://chocolatesgrazigrazi.com.br/cdn/shop/files/Capturadetela14.06.2023as11.07.13AM_1728x.png?v=1686751668" },
  
];

export default function ProductsCards() {
  const { addToCart } = useCart(); // Hook do contexto de carrinho

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 }); // Lógica para adicionar ao carrinho
  };

  return (
    <div className="container mx-auto px-4 py-8" id="target-section">
      <h1 className="text-3xl font-bold text-center mb-8">Trufas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg rounded-md">
            <CardHeader className="p-0">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-zinc-800 text-white font-semibold py-2 px-4 rounded 
               hover:bg-green-800 
               active:bg-green-500
               focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() =>
                  addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })
                }
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
