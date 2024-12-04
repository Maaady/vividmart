// pages/index.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Avatar One', category: 'Fantasy', price: '$25' },
  { id: 2, name: 'Avatar Two', category: 'Sci-Fi', price: '$30' },
  // Add more products here
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Fantasy', 'Sci-Fi', 'Casual'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <main className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
