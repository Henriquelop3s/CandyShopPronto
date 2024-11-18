// src/components/ProductCard.tsx

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Button onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
    </div>
  );
}
