import React from "react";
import { Box, MainButton } from "../../../components";
import styles from "./styles.module.css";

function Cart() {
  const { Summary, flex } = styles;
  return (
    <div>
      <h3>Your Cart (4items)</h3>
      <div className="d-flex gap-3">
        <div className="flex-grow-1">
          <Box>test</Box>
        </div>
        <Box width="350px">
          <h4 className="pb-2">Summary</h4>
          <div className={Summary}>
            <div className={flex}>
              <p className="fw-medium">SUBTOTAL</p>
              <p>$50.00</p>
            </div>
            <div className={flex}>
              <p className="fw-medium">TAX</p>
              <p>$00.00</p>
            </div>
            <div className={flex}>
              <p className="fw-bold fs-5">ORDER TOTAL</p>
              <p className="fw-bold fs-5">$50.00</p>
            </div>
          </div>
          <MainButton width="100%">CHECKOUT</MainButton>
        </Box>
      </div>
    </div>
  );
}

export default Cart;
