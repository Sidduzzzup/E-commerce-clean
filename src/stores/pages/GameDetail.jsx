import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Spinner, Alert } from 'react-bootstrap';
import { FaStar, FaShoppingCart, FaArrowLeft, FaHeart } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../../context/AuthContext';

// Import the games data from the Games component
const gamesData = [
  {
    id: 1,
    title: "God of War Ragnarök",
    price: 59.99,
    image: "/images/games/god-of-war.jpg",
    rating: 4.9,
    platform: "PS5",
    genre: "Action-Adventure",
    description: "Continue the epic journey of Kratos and Atreus as they face the impending Ragnarök. As the nine realms are thrown into chaos, father and son must decide their own fates.",
    releaseDate: "November 9, 2022",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    features: ["4K HDR Graphics", "DualSense Integration", "Expansive World", "Epic Boss Battles"]
  },
  {
    id: 2,
    title: "Spider-Man 2",
    price: 69.99,
    image: "/images/games/spiderman2.jpg",
    rating: 4.8,
    platform: "PS5",
    genre: "Action-Adventure",
    description: "Experience the next chapter in the Marvel's Spider-Man series as Peter Parker and Miles Morales face their greatest challenge yet.",
    releaseDate: "October 20, 2023",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    features: ["Two Playable Spider-Men", "Expanded New York City", "New Abilities", "Venom as a Major Antagonist"]
  },
  // Add more detailed game data as needed
];

// Fallback image for when the game image fails to load
const fallbackImage = "/images/games/placeholder.svg";

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch game data
    const timer = setTimeout(() => {
      const foundGame = gamesData.find(g => g.id === parseInt(id));
      if (foundGame) {
        setGame(foundGame);
      } else {
        setError("Currently all Games Servers are Hijacked, Please visit nearby Walmart for more Games.");
        
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const handleAddToCart = () => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    addToCart({
      id: game.id,
      title: game.title,
      price: game.price,
      image: game.image,
      quantity: 1
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddToWishlist = () => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    setAddedToWishlist(true);
    setTimeout(() => setAddedToWishlist(false), 2000);
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" size="lg" />
          <h4 className="mt-3">Loading game details...</h4>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
          <Button as={Link} to="/games" variant="outline-danger">
            <FaArrowLeft /> Back to Games
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="game-detail-container py-5">
      <Button 
        as={Link} 
        to="/games" 
        variant="outline-primary" 
        className="mb-4"
      >
        <FaArrowLeft /> Back to Games
      </Button>
      
      <Row>
        <Col md={5} className="mb-4 mb-md-0">
          <div className="game-image-container detail">
            <img 
              src={game.image} 
              alt={game.title} 
              className="img-fluid rounded shadow" 
              onError={handleImageError}
            />
            <div className="game-overlay">
              <Badge bg="primary" className="game-platform">{game.platform}</Badge>
              <Badge bg="success" className="game-genre">{game.genre}</Badge>
            </div>
          </div>
        </Col>
        
        <Col md={7}>
          <h1 className="game-title mb-3">{game.title}</h1>
          
          <div className="game-rating mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.floor(game.rating) ? "star-filled" : "star-empty"} 
              />
            ))}
            <span className="rating-value ms-2">{game.rating}</span>
          </div>
          
          <div className="game-price mb-4">
            <h2 className="text-primary">${game.price}</h2>
          </div>
          
          <div className="game-actions mb-4">
            <Button 
              variant={addedToCart ? "success" : "primary"} 
              size="lg" 
              className="me-3"
              onClick={handleAddToCart}
            >
              <FaShoppingCart /> {addedToCart ? "Added to Cart!" : "Add to Cart"}
            </Button>
            
            <Button 
              variant={addedToWishlist ? "danger" : "outline-danger"} 
              size="lg"
              onClick={handleAddToWishlist}
            >
              <FaHeart /> {addedToWishlist ? "Added to Wishlist!" : "Add to Wishlist"}
            </Button>
          </div>
          
          <div className="game-info mb-4">
            <h4>Game Details</h4>
            <p>{game.description}</p>
            
            <Row className="mt-3">
              <Col sm={6}>
                <p><strong>Release Date:</strong> {game.releaseDate}</p>
                <p><strong>Developer:</strong> {game.developer}</p>
              </Col>
              <Col sm={6}>
                <p><strong>Publisher:</strong> {game.publisher}</p>
                <p><strong>Platform:</strong> {game.platform}</p>
              </Col>
            </Row>
          </div>
          
          <div className="game-features">
            <h4>Key Features</h4>
            <ul className="list-unstyled">
              {game.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <Badge bg="info" className="me-2">✓</Badge> {feature}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GameDetail; 