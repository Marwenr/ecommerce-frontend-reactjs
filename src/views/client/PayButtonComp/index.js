import React, { useState } from "react";
import { PayNow, loadStripe } from "react-stripe-js";

const PayButtonComp = () => {
  const stripe = loadStripe(
    "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  );

  const [clientSecret, setClientSecret] = useState("");

  const createOrderAndGetPaymentIntent = (amount) => {
    // in this function we will store the order info and get a payment intent back from server.
    if (!clientSecret) {
      const orderInfo = {
        amount: amount,
        receiptEmail: "immilon27@gmail.com",
        carts: [
          // some product here
        ],
      };
      fetch("http://localhost:2727/create-order-get-client-secret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  };

  return (
    <PayNow
      title="Click To Pay"
      successMessage="payment done,creating order please wait...."
      stripe={stripe}
      clientSecret={clientSecret}
      onClick={() => {
        // todo: other input field validation (like name,shipping address,etc)
        // todo: create the order and store into database by setting payment-status to pending
        createOrderAndGetPaymentIntent(55);
      }}
      onPaymentSuccess={() => {
        console.log(
          "wow, payment done. the webhook will be called, so we will update order info in webhook and make the payment-status pending to paid."
        );
      }}
    />
  );
};

export default PayButtonComp