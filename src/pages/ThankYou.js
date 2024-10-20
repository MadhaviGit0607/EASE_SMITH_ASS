import React from 'react';
import './ThankYou.css';

function ThankYou() {
    return (
        <div className="thank-you-container">
            <h2>Thank You!</h2>
            <p>Your interest in the product has been noted.</p>
            <p>We appreciate your time and look forward to serving you again!</p>
            <button className="back-button" onClick={() => window.location.href = '/'}>
                Continue Shopping
            </button>
        </div>
    );
}

export default ThankYou;
