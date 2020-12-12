import React from 'react';

const ProductDetail = ({ data }) => {
  console.log('product', data);
  return (
    <div className="row">
      <p className="h1">{data.description}</p>
      <p>{data.name}</p>
      <p className="h2">
        Harga :
        {data.display_price}
      </p>
    </div>
  );
};

export default ProductDetail;
