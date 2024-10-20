import React from 'react';
import '../styles/Modal.css';

const AddToCartModal = ({ isOpen, product, onClose }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Your Cart</h2>
                <hr />
                <h3>Congratulations</h3>
                <p>
                    <strong>{product.name}</strong> has been added to the cart!
                </p>
                <p>
                    {new Intl.NumberFormat('en-IN', { 
                        style: 'currency', 
                        currency: 'INR' 
                    }).format(product.price)}
                </p>

                <img src={product.image} alt={product.name} />
                <button className="continue-button" onClick={onClose}>
                    CONTINUE SHOPPING
                 </button>
            </div>
        </div>
    );
};

export default AddToCartModal;
