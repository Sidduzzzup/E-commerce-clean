import React, { useState } from 'react';
import { fridgeData } from "../data/fridge";
import Navbarr from '../components/Navbarr';
import { Link } from 'react-router-dom';
import FilterSidebar from '../../components/FilterSidebar';

export const FridgePage = () => {
  const brandOptions = Array.from(new Set(fridgeData.map(item => item.brand)));
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredData = selectedBrands.length === 0
    ? fridgeData
    : fridgeData.filter(item => selectedBrands.includes(item.brand));

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  const handleReset = () => setSelectedBrands([]);

  const styles = {
    container: {
      backgroundColor: '#0e1015',
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
      background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#a8a8a8',
    },
    layout: {
      display: 'flex',
      gap: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '40px',
      padding: '0 20px',
      flex: 1,
    },
    card: {
      background: 'linear-gradient(145deg, #1b1f2b, #141723)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
    },
    img: {
      width: '100%',
      height: '320px',
      padding: '20px',
      borderRadius: '35px',
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
      background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
      color: '#fff',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      marginTop: '10px',
      transition: 'background 0.3s ease',
    },
  };

  return (
    <>
      <Navbarr />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Explore Refrigerators</h2>
          <p style={styles.subtitle}>Discover energy-efficient fridges from top brands.</p>
        </div>
        <div style={styles.layout}>
          <FilterSidebar
            options={brandOptions}
            selectedOptions={selectedBrands}
            onChange={handleBrandChange}
            onReset={handleReset}
          />
          <div style={styles.grid}>
            {filteredData.map((item) => (
              <Link
                key={item.id}
                to={`/fridges/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
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
                  <img style={styles.img} src={item.image} alt={item.brand} />
                  <div style={styles.cardContent}>
                    <h3 style={styles.brand}>{item.brand}</h3>
                    <p style={styles.price}>₹{item.price}</p>
                    <div style={styles.button}>View Details</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FridgePage;
