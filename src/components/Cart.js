import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CartItems from './CartItems';

function Cart() {
  const [cartProducts, setCartProduct] = useState([]);
  const [count, setCount] = useState(); //   {id:1, qty:0}

  const { productId } = useParams();

  const navigate = useNavigate();

  //  Fatch API from cart

  console.log(count);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/cart`)
      .then((res) => setCartProduct(res.data));
  }, [productId]);

  //   Cart Item Remove button

  const removeCartProduct = (id) => {
    axios.delete(`http://localhost:3004/cart/${id}`).then((response) => {
      console.log(response);
      if (response.status === 200) {
        navigate('/productpage/1');

        alert(' Remove to Cart');
      }
    });
  };

  const placeOrder = () => {
    navigate(`/ordersummery`);
  };

  const decrement = (id) => {
    setCount(count - 1);
  };

  const increment = (id) => {
    // I will update this function
    setCount(count + 1);
  };

  return (
    <div className="section-product">
      <div>
        <div className="section-products-page">
          {cartProducts.map((cartProduct) => {
            return (
              <CartItems
                cartItem={cartProduct}
                removeCartProduct={removeCartProduct}
                increment={increment}
                decrement={decrement}
                count={count}
              />
            );
          })}
        </div>
        <h2>Total Amount - 1234 </h2>
        <button onClick={() => placeOrder()}>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
