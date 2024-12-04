// pages/product/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product Details (ID: {id})</h1>
      {/* Add detailed information here */}
    </div>
  );
};

export default ProductDetails;
