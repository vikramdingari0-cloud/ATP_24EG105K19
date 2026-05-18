import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-contain p-4 bg-gray-50"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm h-10 overflow-hidden mb-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">{product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
