import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ProductsPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [productsPage, setProductsPage] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/product?categoryId=${categoryId}`)
      .then((res) => setProductsPage(res.data));
  }, []);

  const onProductDetail = (pId) => {
    navigate(`/productdetails/${pId}`);
  };

  const onAddToCart = (id, title, image, price) => {
    const payload = {
      productId: id,
      title: title,
      image: image,
      price: price,
    };

    axios.post("http://localhost:3004/cart", payload).then((response) => {
      if (response.status === 201) {
        alert("Add to Cart");
      }
    });
  };

  //   filter items

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3004/product?title==${productId}`)
  //     .then((res) => setFilterTitle(res.data));
  // }, [filterTitle]);

  // useEffect(() => {
  //   console.log(result);
  //   const result = productsPage.filter((product) => {
  //     return product.title.toLowerCase().match(filterTitle.toLowerCase);
  //   });
  // }, [filterTitle]);

  return (
    <div className="section">
      <div className="section-products-page">
        {productsPage.map((productPage) => {
          const { id, title, price, image } = productPage;
          // console.log(productPage);
          return (
            <div className="products-cart">
              <article className="article-products-page" key={productPage.id}>
                <img src={productPage.image} alt="product" className="" />

                <h4>{productPage.title}</h4>
                <p>Price {productPage.price}</p>
                <div className="products-btn">
                  <button onClick={(e) => onAddToCart(id, title, image, price)}>
                    Add Cart
                  </button>
                  <button onClick={() => onProductDetail(id)}>Details</button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
