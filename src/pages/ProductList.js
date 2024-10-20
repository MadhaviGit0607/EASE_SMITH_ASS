import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import mockData from '../mockData';

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const itemsPerPage = 5;
    const totalPages = Math.ceil(mockData.length / itemsPerPage);
    
    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    function handleViewProduct(product) {
    window.location.href = `/thank-you`;
  }

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {mockData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={() => handleAddToCart(product)}
                        onViewProduct={() => handleViewProduct(product)}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            <AddToCartModal product={selectedProduct} isOpen={modalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ProductList;
