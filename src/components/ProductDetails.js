import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [productDetail, setProductDetrail] = useState({});
  const { pId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3004/product/${pId}`)
      .then((res) => setProductDetrail(res.data));
  }, []);

  console.log(productDetail);
  return (
    <div className="section-product">
      <div>
        <h2>Product Details</h2>
        <div>{productDetail.title}</div>
      </div>
    </div>
  );
}

export default ProductDetails;
