import React from "react";
import SingleCreditView from "./SingleCreditsView";
import { loadStripe } from "@stripe/stripe-js";
interface StripeSessionResponse {
  id: string; // Definisce che la sessione ha un campo id di tipo string
}
const BuyCredits: React.FC = () => {
  const creditsOptions = [
    { amount: 50, id: "buy-button" },
    { amount: 100, id: "buy-button-1" },
    { amount: 200, id: "buy-button-5" },
    { amount: 500, id: "buy-button-4" },
    { amount: 1000, id: "buy-button-3" },
    { amount: 5000, id: "buy-button-2" },
    { amount: 10000, id: "buy-button-6" },
  ];

  // Carica la chiave pubblica di Stripe
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);


    // Funzione per l'abbonamento ricorrente
    const handleRecurringPayment = async (amount: number) => {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error("Stripe failed to load");
        return;
      }
  
      const response = await fetch("/api/create-recurring-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });
  
      const session: StripeSessionResponse = await response.json() as StripeSessionResponse;;
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result?.error) {
        console.error(result.error.message);
      }
    };

  const handleBuyCredits = async (amount: number) => {
    const stripe = await stripePromise;


    // Chiamata all'API per creare una sessione Stripe
    
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const session: StripeSessionResponse = await response.json() as StripeSessionResponse;


    // Reindirizza l'utente a Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="container-fluid" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
      <div className="card shadow mb-4">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{ paddingTop: "18px", paddingBottom: "18px" }}
        >
          <h6 className="text-primary fw-bold m-0">BUY CREDITS</h6>
        </div>
        <div className="card-body row" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
          {/* Left Column: Credits Options */}
          <div className="col-md-6" style={{ flex: 1 }}>
            {creditsOptions.map((credit) => (
              <div className="row mb-3" id="buy-credit-row" key={credit.id}>
                <div className="col">
                  <label className="col-form-label" style={{ color: "var(--bs-emphasis-color)" }}>
                    {credit.amount} Credits
                  </label>
                </div>
                <div className="col">
                
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "17.6px", paddingRight: "33px", paddingLeft: "33px" }}
                    onClick={() => handleBuyCredits(credit.amount)} // Collega la funzione di acquisto qui
                  >
                    Buy
                  </button>
                </div>
                <div className="col d-xxl-flex align-items-xxl-center" id="col-recurring-link">
                  <a
                    data-bs-toggle="tooltip"
                    data-bss-tooltip=""
                    href="#"
                    style={{ fontSize: "14px", color: "rgb(122,151,237)" }}
                    title="Coming soon"
                    onClick={() => handleRecurringPayment(credit.amount)}
                  >
                    Make it recurring
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Credits Chart */}
          <div className="col-md-6" style={{ flex: 1 }}>
            <SingleCreditView
              title="YOUR CREDITS"
              chartData={[
                { label: "Credits Left", value: 250 },
                { label: "Credits Spent", value: 500 },
              ]}
              usedColor="#4e73df"
              leftColor="#53c4f5"
              usedLabel="Spent"
              leftLabel="Left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;

