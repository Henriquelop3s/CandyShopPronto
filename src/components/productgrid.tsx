'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Confete", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 2, name: "Beijinho", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 3, name: "Leite Ninho", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 4, name: "Negresco", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 5, name: "Morango", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 6, name: "Maracujá", price: 3.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 7, name: "Cone Confete", price: 5.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 8, name: "Cone Ninho", price: 5.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 9, name: "Cone Negresco", price: 5.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
  { id: 10, name: "Cone Beijinho", price: 5.00, image: "https://i.pinimg.com/564x/03/ab/de/03abdeb0ef8bc0b12765537eade06f77.jpg" },
];

export default function ProductsCards() {
  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Implement your add to cart logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Trufas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
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
              <Button className="w-full" onClick={() => handleAddToCart(product.id)}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
