// components/ProductCard.tsx
import React from 'react';
import Link from 'next/link';

interface ProductProps {
  product: { id: number; name: string; category: string; price: string };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-md shadow hover:shadow-lg cursor-pointer">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-green-600 font-semibold">{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
