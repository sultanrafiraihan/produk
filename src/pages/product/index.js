import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ProductDetail } from '../../components';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setLoginLoading(true);
    productService
      .getProduct(50, 0, '')
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>
            {' '}
            Product
            {isLoginLoading}
          </h1>
        </div>
        {isLoginLoading && <p>Loading...</p>}
        {product.map((element) => {
          return (
            <ProductDetail data={element} className="container" />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
