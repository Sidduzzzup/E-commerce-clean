import React from "react";
import { mData } from "../data/mobiles";
import { useParams } from "react-router-dom";
import Navbarr from "../components/Navbarr";
import { useCart } from "../Context/CartContext";

const MobilesSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = mData.find((item) => item.id === id);

  if (!products) {
    return (
      <>
        <Navbarr />
        <div style={styles.centerScreen}>
          <h2 style={styles.notFound}>Product not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navsin">
        <Navbarr />
      </div>

      <div style={styles.pageContainer}>
        <div style={styles.productContainer}>
          <div style={styles.imageSection}>
            <img src={products.image} alt={products.model} style={styles.productImage} />
          </div>

          <div style={styles.detailsSection}>
            <h2 style={styles.company}>{products.company}</h2>
            <h3 style={styles.model}>{products.model}</h3>
            <h2 style={styles.price}>₹ {products.price}</h2>

            <div style={styles.descriptionBox}>
              <p><strong>Model:</strong> {products.model}</p>
              <p><strong>Category:</strong> {products.category}</p>
              <p><strong>Description:</strong> {products.description}</p>
            </div>

            <button style={styles.orderButton} onClick={() => addToCart(products)}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    borderRadius: "12px",
    boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
    maxWidth: "1100px",
    width: "100%",
  },
  imageSection: {
    flex: "1",
    backgroundColor: "#f5f7fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px",
  },
  productImage: {
    width: "100%",
    maxWidth: "350px",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
  },
  detailsSection: {
    flex: "1",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  company: {
    fontSize: "30px",
    color: "#222",
    marginBottom: "10px",
  },
  model: {
    fontSize: "24px",
    color: "#555",
    marginBottom: "10px",
  },
  price: {
    fontSize: "26px",
    color: "#0070f3",
    marginBottom: "20px",
  },
  descriptionBox: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  orderButton: {
    backgroundColor: "#ff5722",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  centerScreen: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  notFound: {
    fontSize: "26px",
    color: "#e53935",
  },
};

export default MobilesSingle;
