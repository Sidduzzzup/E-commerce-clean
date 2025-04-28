import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./TopSalesProducts.css"; // Importing external CSS

const TopSalesProducts = () => {
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 299.99,
      description: "High-quality sound with noise cancellation",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 199.99,
      description: "Track your health with advanced metrics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 3,
      title: "Ultra HD 4K Camera",
      price: 799.99,
      description: "Professional grade photography equipment",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
      id: 4,
      title: "Designer Sunglasses",
      price: 159.99,
      description: "UV protection with stylish design",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f"
    },
    {
      id: 5,
      title: "Leather Weekend Bag",
      price: 249.99,
      description: "Handcrafted premium leather travel bag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },
    {
      id: 6,
      title: "Smart Home Speaker",
      price: 179.99,
      description: "360° sound with voice control",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230"
    }
  ];

  return (
    <div className="top-sales-container">
      <div className="top-sales-wrapper">
        <h1 className="top-sales-heading">Top Selling Products</h1>

        <div className="top-sales-grid">
          {products.map((product) => (
            <div key={product.id} className="top-sales-card" role="article">
              <div className="top-sales-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="top-sales-image"
                  loading="lazy"
                />
              </div>

              <div className="top-sales-content">
                <h2 className="top-sales-title">{product.title}</h2>
                <p className="top-sales-description">{product.description}</p>

                <div className="top-sales-footer">
                  <span className="top-sales-price">${product.price.toFixed(2)}</span>
                  <button className="top-sales-button" aria-label={`Buy ${product.title}`}>
                    <FiShoppingCart className="top-sales-icon" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSalesProducts;
