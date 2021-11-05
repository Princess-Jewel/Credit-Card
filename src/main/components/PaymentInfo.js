import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/payment-info.css";
import useGlobalContext from "../../Context";

function PaymentInfo () {
  const { data: {name, secretCode, expiry, number}, focus } = useGlobalContext();
  console.log(name, secretCode, expiry, number)

  return (
    <section className="payment-info">
      <Cards 
        cvc={secretCode}
        expiry={expiry}
        name={name}
        number={number}
        focused={focus}
      />
    </section>
  )
}

export default PaymentInfo;