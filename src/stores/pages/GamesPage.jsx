import React, { useState, useEffect } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import Games from '../components/Games';

const GamesPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="games-page">
      {loading ? (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <div className="text-center">
            <Spinner animation="border" role="status" variant="primary" size="lg" />
            <h4 className="mt-3">Loading games collection...</h4>
          </div>
        </Container>
      ) : error ? (
        <Container className="py-5">
          <Alert variant="danger">
            <Alert.Heading>Error loading games</Alert.Heading>
            <p>{error}</p>
          </Alert>
        </Container>
      ) : (
        <Games />
      )}
    </div>
  );
};

export default GamesPage; 