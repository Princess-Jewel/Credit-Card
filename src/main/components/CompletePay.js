import React, {useEffect} from "react";
import useGlobalContext from "../../Context";
import "../styles/complete-pay.css";

const CompletePay = () => {
  const {promoCode, taxEstimate, subTotal, promoFee} = useGlobalContext();
    const tempTotal = +(subTotal) + +(taxEstimate) + +(promoFee);

  return (
    <section className="complete">
      <div className="payment-content">
        <p>
          <label>Subtotal</label>
          <span>&#8358;{subTotal}</span>
        </p>
        <p>
          <label>Estimated TASK</label>
          <span>&#8358;{taxEstimate}</span>
        </p>
        <p>
          <label>Promotional Code: <span className="promo">{promoCode}</span></label>
          <span>&#8358;{promoFee}</span>
        </p>
      </div>
      <div className="pay-btn-wrapper">
        <button type="submit" className="btn">Complete payment</button>
        <p>Total: &#8358;{tempTotal}</p>
      </div>
    </section>
  )
}

export default CompletePay;