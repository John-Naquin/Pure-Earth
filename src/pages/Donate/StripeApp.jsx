import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./StripeApp.css";
import fallbackImage from "../images/phone.jpeg";




const stripePromise = loadStripe("pk_test_51Mj7S0FkKf7A4lt8tMYqvBRsS1WgVgXZI2hkMaUlBLSSIgOGrXpt5m1PM49wXMDRz1liw3TsaeXMkKOwZkorTLV000oHtPMSlD");



export default function StripeApp() {
  const [clientSecret, setClientSecret] = useState("");
  const dollars = sessionStorage.getItem("money");
  const label = sessionStorage.getItem("dollar");

 


  useEffect(() => {
  
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: dollars }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }, []);


  const appearance = {
    theme: 'night',
    labels: 'floating'
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
      <body>
    
          <img
              src={fallbackImage}
              alt="Fallback Background"
              style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
          />
      
    <center>
      <div class="Stripe-Main">
        <div className="App">
          <h2 class="formbackground" style={{color: "#fff"}}>Donate {label}</h2>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </center>
    </body>
    
  );
}