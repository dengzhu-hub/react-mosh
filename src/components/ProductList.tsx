import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [product, setProductList] = useState<string[]>([]);
  useEffect(() => {
    setProductList(['jonas', 'jacl']);
  }, []);
  return (
    <div>
      {product.map(el => (
        <p>{el}</p>
      ))}
    </div>
  );
};

export default ProductList;
