import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      setCategories([...new Set(data.map((p) => p.category))]);
    };
    loadProducts();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (category) => {
    setFilteredProducts(
      category ? products.filter((p) => p.category === category) : products
    );
  };

  const handleSortChange = (order) => {
    const sorted = [...filteredProducts].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <main className="pt-24 p-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <Filter
            categories={categories}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </main>
    </div>
  );
};

export default ProductPage;
