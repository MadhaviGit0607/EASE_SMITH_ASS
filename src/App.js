import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import ThankYou from './pages/ThankYou';
import AddToCartModal from './components/AddToCartModal';
import './styles/App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        
        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
        }
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null); 
    };
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Router>
            <Header cartCount={cartCount} /> 
            <div className="app-container">
                <Routes>
                    <Route 
                        path="/" 
                        element={<ProductList onAddToCart={handleAddToCart} />} 
                    />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </div>
            <AddToCartModal
                isOpen={isModalOpen}
                product={selectedProduct}
                onClose={handleCloseModal}
            />
        </Router>
    );
};

export default App;
