import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        Your Cart is Empty 🛒
      </h2>
    );
  }

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {cartItems.map((item) => (

        <div
          className="cart-item"
          key={item.id}
        >

          <img
            src={item.thumbnail}
            alt={item.title}
          />

          <div className="cart-info">

            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <div className="quantity">

              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <h2>
        <div className="cart-summary">

  <h2>Total: ${totalPrice.toFixed(2)}</h2>

  <button className="checkout-btn">
    Proceed to Checkout
  </button>

</div>
      </h2>

    </div>
  );
}

export default Cart;