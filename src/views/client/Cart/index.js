import React from "react";
import { addOrder } from "../../../store/orderSlice";
import { resetCart } from "../../../store/cartSlice";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { summary, flex, closeBtn, image } = styles;
  const { cart } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.auth);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const orderProduct = cart?.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
  }));

  const onClick = () => {
    dispatch(addOrder({ userId: userData.id, total, orderProduct }));
    dispatch(resetCart());
  };
  return (
    <div>
      <h3 className="mb-3">Your Cart ({cart.length})</h3>
      <div className="d-flex gap-3 flex-wrap">
        <div className="flex-grow-1">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                closeBtn={closeBtn}
                image={image}
                key={item.productId}
                item={item}
              />
            ))
          ) : (
            <h2 className="text-black-50 text-center mt-5">
              Add purchases to your basket
            </h2>
          )}
        </div>
        <div>
          <CartSummary
            summary={summary}
            flex={flex}
            total={total}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
