import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert, Row, Col, Badge, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';
import { MdManageAccounts } from "react-icons/md";
import { API_BASE_URL } from '../../apiConfig';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          setUser(response.data.user);
          setAddress(response.data.user.address || {
            street: '', city: '', state: '', country: '', zipCode: ''
          });
        } else {
          setError('Failed to fetch user data');
        }
      } catch (err) {
        setError('Failed to fetch user data');
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_BASE_URL}/api/auth/update-address`,
        { address },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setUser(response.data.user);
        setIsEditing(false);
        setUpdateSuccess(true);
        setTimeout(() => setUpdateSuccess(false), 3000);
      }
    } catch (err) {
      setUpdateError('Failed to update address');
      setTimeout(() => setUpdateError(null), 3000);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <Container className="profile-container">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="profile-container">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="profile-container">
      <Row>
        <Col md={4}>
          <Card className="profile-card mb-4">
            <Card.Header as="h3" className="text-center">Profile Information</Card.Header>
            <Card.Body>
              {user && (
                <>
                  <div className="text-center mb-3">
                  <MdManageAccounts style={{height: '50px', width: '50px'}}/>
                  </div>
                  <div className="profile-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
                    <p><strong>Role:</strong> <Badge bg="info">{user.role}</Badge></p>
                    <p><strong>Member since:</strong> {formatDate(user.createdAt)}</p>
                    <p><strong>Last login:</strong> {formatDate(user.lastLogin)}</p>
                    <p><strong>Total orders:</strong> {user.orderCount}</p>
                  </div>
                  <div className="profile-actions mt-3">
                    <Button variant="danger" onClick={handleLogout} className="w-100">
                      Logout
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="profile-card">
            <Card.Header as="h3" className="text-center">Address Information</Card.Header>
            <Card.Body>
              {updateSuccess && <Alert variant="success">Address updated successfully!</Alert>}
              {updateError && <Alert variant="danger">{updateError}</Alert>}
              {isEditing ? (
                <Form onSubmit={handleAddressUpdate}>
                  <Form.Group className="mb-3">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={address.street}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={address.state}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={address.country}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipCode"
                      value={address.zipCode}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Address</Button>
                  <Button variant="secondary" className="ms-2" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Form>
              ) : (
                <>
                  <div className="address-info">
                    <p><strong>Street:</strong> {user?.address?.street}</p>
                    <p><strong>City:</strong> {user?.address?.city}</p>
                    <p><strong>State:</strong> {user?.address?.state}</p>
                    <p><strong>Country:</strong> {user?.address?.country}</p>
                    <p><strong>ZIP Code:</strong> {user?.address?.zipCode}</p>
                  </div>
                  <Button variant="outline-primary" onClick={() => setIsEditing(true)}>
                    Edit Address
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>

          <Card className="profile-card mt-4">
            <Card.Header as="h3" className="text-center">Recent Orders</Card.Header>
            <Card.Body>
              {user?.recentOrders?.length > 0 ? (
                <div className="recent-orders">
                  {user.recentOrders.map((order, index) => (
                    <div key={index} className="order-item mb-3 p-3 border rounded">
                      <p><strong>Order Date:</strong> {formatDate(order.createdAt)}</p>
                      <p><strong>Status:</strong> <Badge bg={order.status === 'completed' ? 'success' : 'warning'}>{order.status}</Badge></p>
                      <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <Alert variant="info">No recent orders</Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage; 