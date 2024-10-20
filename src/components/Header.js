import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Header = () => {
    return (
        <header className="header">
            <h1>E-commerce Store</h1>
            <input type="text" placeholder="Search products..." className="search-bar" />
            <div className="icons">
                <Link to="/profile">👤</Link>
                <Link to="/cart">🛒</Link>
            </div>
        </header>
    );
};

export default Header;