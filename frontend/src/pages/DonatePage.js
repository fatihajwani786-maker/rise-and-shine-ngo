import React, { useState } from 'react';
import './DonatePage.css'; // We'll create this

function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState('one-time');

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  return (
    <main className="donate-page">
      <h2>Make a Donation</h2>
      <p>Your generous donation powers our mission and brings hope to those in need.</p>

      <div className="donate-form-container">
        <div className="donate-options">
          <h3>Choose Amount (in USD)</h3>
          <div className="amount-selection">
            <button onClick={() => handleAmountClick(25)} className={amount === 25 ? 'selected' : ''}>$25</button>
            <button onClick={() => handleAmountClick(50)} className={amount === 50 ? 'selected' : ''}>$50</button>
            <button onClick={() => handleAmountClick(100)} className={amount === 100 ? 'selected' : ''}>$100</button>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Custom Amount"
            />
          </div>

          <h3>Select Frequency</h3>
          <div className="frequency-selection">
            <button onClick={() => setFrequency('one-time')} className={frequency === 'one-time' ? 'selected' : ''}>One-Time</button>
            <button onClick={() => setFrequency('monthly')} className={frequency === 'monthly' ? 'selected' : ''}>Monthly</button>
          </div>
        </div>

        <form className="payment-form">
          <h3>Your Information</h3>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" required />

          <h3>Payment Details</h3>
          <label>Card Number</label>
          <input type="text" placeholder="0000 0000 0000 0000" required />

          <div className="card-details">
            <div>
              <label>Expiry Date</label>
              <input type="text" placeholder="MM / YY" required />
            </div>
            <div>
              <label>CVC</label>
              <input type="text" placeholder="123" required />
            </div>
          </div>

          <button type="submit" className="btn-submit-donation">
            Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Now'}
          </button>
          <p className="secure-note">🔒 Your payment is secure.</p>
        </form>
      </div>
    </main>
  );
}

export default DonatePage;