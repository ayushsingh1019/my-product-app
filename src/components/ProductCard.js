import React, { useEffect, useState } from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.id === product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorite
      ? storedFavorites.filter((fav) => fav.id !== product.id)
      : [...storedFavorites, product];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden rounded-t-lg bg-gray-100 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-emerald-500 font-bold mt-2">${product.price.toFixed(2)}</p>
        <button
          className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:shadow-md transition"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>
        <button
          className="mt-2 w-full px-4 py-2 border rounded-full text-emerald-500 hover:text-teal-500 transition"
          onClick={toggleFavorite}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
