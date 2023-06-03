import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductCategories() {
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3004/categories')
      .then((res) => setProductCategories(res.data));
  }, []);

  // console.log(productCategories);

  return (
    <div className="section-category">
      <div className="section-cart">
        {productCategories.map((productCategory) => {
          return (
            <article className="article-cart" key={productCategory.id}>
              <Link to={`/productpage/${productCategory.id}`}>
                {productCategory.name}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCategories;
