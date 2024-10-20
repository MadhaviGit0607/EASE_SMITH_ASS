import React, { useState } from 'react';
import '../styles/components.css';

const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

const ProductCard = ({ product, onViewProduct, onAddToCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    const handleAddToCart = () => {
        setIsConfirmVisible(true);
    };

    const handleConfirm = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onAddToCart(product, newQuantity);
        setIsConfirmVisible(false);
        
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <button className="view-product" onClick={onViewProduct}>
                View Product
            </button>

            <h3>{product.name}</h3>
            <p>Indoor plant, low maintenance</p>
            <p>{formatPrice(product.price)}</p>

            <button className="add-to-cart" onClick={handleAddToCart}>
                <span>-</span> Add to Cart <span>+</span>
            </button>

            {isConfirmVisible && (
                <div className="confirmation-buttons">
                    <p>{product.name} added to the cart. Please confirm.</p>
                    <button className="confirm-button" onClick={handleConfirm}>
                        CONFIRM
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
