import React from "react";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative animate-fade-in">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition" onClick={onClose}>
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/3 object-contain rounded-lg bg-gray-100"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-emerald-500 mt-2 text-xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-md hover:shadow-lg transition" onClick={onClose}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
