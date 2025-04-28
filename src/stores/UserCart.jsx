import React from 'react';
import { useCart } from './Context/CartContext';
import Navbarr from './components/Navbarr';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './UserCart.css';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numeric value from price string (assuming format like "₹25,000")
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return total + price;
    }, 0);
  };

  return (
    <>
      <Navbarr />
      <Container className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <Card className="empty-cart-card">
            <Card.Body className="text-center">
              <FaShoppingBag className="empty-cart-icon" />
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Button as={Link} to="/" variant="primary" className="continue-shopping-btn">
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <>
            <Row>
              <Col lg={8}>
                {cartItems.map((item) => (
                  <Card key={item.id} className="cart-item-card mb-3">
                    <Card.Body>
                      <Row>
                        <Col md={3}>
                          <div className="cart-item-image">
                            <img src={item.image} alt={item.product} />
                          </div>
                        </Col>
                        <Col md={6}>
                          <h4 className="cart-item-title">{item.product}</h4>
                          <p className="cart-item-model">{item.model}</p>
                          <p className="cart-item-price">{item.price}</p>
                        </Col>
                        <Col md={3} className="d-flex align-items-center justify-content-end">
                          <Button 
                            variant="outline-danger" 
                            className="remove-btn"
                            onClick={() => removeFromCart(item)}
                          >
                            <FaTrash /> Remove
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
              
              <Col lg={4}>
                <Card className="cart-summary-card">
                  <Card.Header as="h5">Order Summary</Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                      <strong>Total</strong>
                      <strong>₹{calculateTotal().toLocaleString()}</strong>
                    </div>
                    <Button variant="primary" className="w-100 checkout-btn">
                      Proceed to Checkout
                    </Button>
                    <div className="text-center mt-3">
                      <Link to="/" className="continue-shopping-link">
                        Continue Shopping
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default UserCart;
