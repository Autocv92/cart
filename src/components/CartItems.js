import React from 'react';
import { useState } from 'react';
import OrderSummery from './OrderSummery';

function CartItems({
  cartItem,
  removeCartProduct,
  decrement,
  increment,
  count,
}) {
  const { id, title, price, image, productId } = cartItem;

  return (
    <div className="products-cart">
      <article className="article-products-page" key={id}>
        <img src={image} alt="product" className="" />

        <h4>{title}</h4>
        <p>Price {price * count}</p>
        <div className="products-cart-btn">
          <button>Order Item</button>
          <button onClick={() => removeCartProduct(cartItem.id)}>Remove</button>

          <div className="add-minus-quantity">
            <button onClick={() => decrement(id)}> - </button>
            {count}
          </div>
          <div className="add-plus-quantity">
            <button onClick={() => increment(id)}> + </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CartItems;
