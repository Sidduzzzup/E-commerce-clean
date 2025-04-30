import React, { useState } from 'react';
import { furnitureData } from '../data/furniture';
import Navbarr from '../components/Navbarr';
import { Link } from 'react-router-dom';
import FilterSidebar from '../../components/FilterSidebar';

const FurniturePage = () => {
  const brandOptions = Array.from(new Set(furnitureData.map(item => item.brand)));
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredData = selectedBrands.length === 0
    ? furnitureData
    : furnitureData.filter(item => selectedBrands.includes(item.brand));

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
    layout: {
      display: 'flex',
      gap: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      flex: 1,
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
          <h2 style={styles.title}>Furniture Section</h2>
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
              <Link key={item.id} to={`/furs/${item.id}`} style={{ textDecoration: 'none' }}>
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
      </div>
    </>
  );
};

export default FurniturePage;
