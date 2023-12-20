import React from "react";
import { Box, MainButton } from "../../../../components";

function CartSummary({ summary, flex, total, onClick }) {
  return (
    <Box width="350px">
      <h4 className="pb-2">Summary</h4>
      <div className={summary}>
        <div className={flex}>
          <p className="fw-medium">SUBTOTAL</p>
          <p>${total}</p>
        </div>
        <div className={flex}>
          <p className="fw-medium">TAX</p>
          <p>$0</p>
        </div>
        <div className={flex}>
          <p className="fw-bold fs-5">ORDER TOTAL</p>
          <p className="fw-bold fs-5">${total}</p>
        </div>
      </div>
      <MainButton width="100%" onClick={onClick}>
        CHECKOUT
      </MainButton>
    </Box>
  );
}

export default CartSummary;
