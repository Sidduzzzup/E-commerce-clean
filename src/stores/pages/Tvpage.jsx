import React, { useState } from 'react';
import { tvsData } from '../data/tv';
import Navbarr from '../components/Navbarr';
import { Link } from 'react-router-dom';

export const Tvpage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const styles = {
    container: {
      backgroundColor: '#0f1115',
      padding: '60px 20px',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
      color: '#f1f1f1',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#a8a8a8',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '40px',
      padding: '0 20px',
    },
    card: {
      background: 'linear-gradient(145deg, #1f2230, #171924)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
    },
    img: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '20px',
      textAlign: 'center',
      color: '#ffffff',
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '10px',
    },
    price: {
      fontSize: '1.2rem',
      color: '#00dbde',
      marginBottom: '20px',
    },
    button: {
      display: 'inline-block',
      padding: '12px 25px',
      background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      color: '#fff',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      transition: 'background 0.3s ease',
    },
  };

  return (
    <>
      <Navbarr />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Explore Top Electronics</h2>
          <p style={styles.subtitle}>Experience the future of entertainment today.</p>
        </div>

        <div style={styles.grid}>
          {tvsData.map((item) => (
            <div
              key={item.id}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <img style={styles.img} src={item.image} alt={item.brand} />
              <div style={styles.cardContent}>
                <h3 style={styles.brand}>{item.brand}</h3>
                <p style={styles.price}>${item.price}</p>
                <Link
                  to={`/Tvsss/${item.id}`}
                  style={styles.button}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tvpage;
