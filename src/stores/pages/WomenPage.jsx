import React from 'react';
import { womanData } from "../data/woman";
import Navbarr from '../components/Navbarr';
import { Link } from 'react-router-dom';

export const WomenPage = () => {
  const styles = {
    container: {
      backgroundColor: '#1a202c',
      padding: '60px 20px',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      color: '#f1f1f1',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #ff7eb3, #ff758c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
    },
    card: {
      background: '#2d3748',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
    },
    image: {
      width: '100%',
      height: '320px',
      padding: '20px',
      borderRadius: '35px',
    },
    details: {
      padding: '16px',
      color: '#fff',
      textAlign: 'center',
    },
    brand: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '8px',
    },
    price: {
      fontSize: '1rem',
      color: '#f687b3',
    },
  };

  return (
    <>
      <Navbarr />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Women's Fashion</h2>
        </div>

        <div style={styles.grid}>
          {womanData.map((item) => (
            <Link key={item.id} to={`/womenss/${item.id}`} style={{ textDecoration: 'none' }}>
              <div
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
                <img src={item.image} alt={item.brand} style={styles.image} />
                <div style={styles.details}>
                  <div style={styles.brand}>{item.brand}</div>
                  <div style={styles.price}>₹{item.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WomenPage;
