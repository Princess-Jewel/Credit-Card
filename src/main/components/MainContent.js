import React from "react";
import Form from "./Form";
import PaymentInfo from "./PaymentInfo";
import "../styles/maincontent.css";
import CompletePay from "./CompletePay";
import Header from "./Header";

function MainContent () {

  return (
    <main className="main">
      <section className="main-content">
      <Header />
        <div className="transaction-detail">
   
          <PaymentInfo />
          <Form />
        </div>
        <CompletePay />
      </section>
    </main>
  )
}

export default MainContent;