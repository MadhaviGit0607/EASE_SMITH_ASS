import React from 'react';
import '../styles/components.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
