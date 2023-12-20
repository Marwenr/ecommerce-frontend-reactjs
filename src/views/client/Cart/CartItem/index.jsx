import React from "react";
import { Box } from "../../../../components";
import { CloseButton, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFromCart, updateQty } from "../../../../store/cartSlice";

function CartItem({ closeBtn, item, image }) {
  const dispatch = useDispatch();
  const increment = () => {
    const quantity = item.quantity + 1;
    dispatch(updateQty({ id: item.productId, quantity }));
  };
  const decrement = () => {
    const quantity = item.quantity > 1 ? item.quantity - 1 : 1;
    dispatch(updateQty({ id: item.productId, quantity }));
  };
  return (
    <Box className="d-flex gap-2 mb-3">
      <CloseButton
        className={closeBtn}
        onClick={() => dispatch(deleteFromCart(item.productId))}
      />
      <Image src={item.image} className={image} />
      <div>
        <h2>{item.price * item.quantity}</h2>
        <h5 className="mt-2">{item.title}</h5>
        <h5 className="mt-2">
          Qty:
          <i
            className="fa-regular fa-square-minus ms-3 me-1"
            onClick={decrement}
          ></i>
          <span>{item.quantity}</span>
          <i className="fa-regular fa-square-plus ms-1" onClick={increment}></i>
        </h5>
      </div>
    </Box>
  );
}

export default CartItem;
