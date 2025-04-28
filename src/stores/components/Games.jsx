import React, { useState } from 'react';
import { Card, Row, Col, Button, Badge, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';
import './Games.css';

// Top 20 games data with local image paths
const gamesData = [
  {
    id: 1,
    title: "God of War Ragnarök",
    price: 59.99,
    image: "/images/games/god-of-war.jpg",
    rating: 4.9,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 2,
    title: "Spider-Man 2",
    price: 69.99,
    image: "/images/games/spiderman2.jpg",
    rating: 4.8,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 3,
    title: "Horizon Forbidden West",
    price: 59.99,
    image: "/images/games/horizon.jpg",
    rating: 4.7,
    platform: "PS5",
    genre: "Action RPG"
  },
  {
    id: 4,
    title: "Final Fantasy XVI",
    price: 69.99,
    image: "/images/games/ff16.jpg",
    rating: 4.6,
    platform: "PS5",
    genre: "RPG"
  },
  {
    id: 5,
    title: "Resident Evil 4 Remake",
    price: 59.99,
    image: "/images/games/re4.jpg",
    rating: 4.8,
    platform: "PS5",
    genre: "Survival Horror"
  },
  {
    id: 6,
    title: "Baldur's Gate 3",
    price: 59.99,
    image: "/images/games/baldurs-gate.jpg",
    rating: 4.9,
    platform: "PS5",
    genre: "RPG"
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    price: 49.99,
    image: "/images/games/cyberpunk.jpg",
    rating: 4.5,
    platform: "PS5",
    genre: "Action RPG"
  },
  {
    id: 8,
    title: "Elden Ring",
    price: 59.99,
    image: "/images/games/elden-ring.jpg",
    rating: 4.9,
    platform: "PS5",
    genre: "Action RPG"
  },
  {
    id: 9,
    title: "The Last of Us Part I",
    price: 49.99,
    image: "/images/games/last-of-us.jpg",
    rating: 4.8,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 10,
    title: "Gran Turismo 7",
    price: 59.99,
    image: "/images/games/gran-turismo.jpg",
    rating: 4.6,
    platform: "PS5",
    genre: "Racing"
  },
  {
    id: 11,
    title: "Demon's Souls",
    price: 49.99,
    image: "/images/games/demons-souls.jpg",
    rating: 4.7,
    platform: "PS5",
    genre: "Action RPG"
  },
  {
    id: 12,
    title: "Ratchet & Clank: Rift Apart",
    price: 49.99,
    image: "/images/games/ratchet-clank.jpg",
    rating: 4.7,
    platform: "PS5",
    genre: "Action-Platformer"
  },
  {
    id: 13,
    title: "Returnal",
    price: 49.99,
    image: "/images/games/returnal.jpg",
    rating: 4.6,
    platform: "PS5",
    genre: "Roguelike"
  },
  {
    id: 14,
    title: "Deathloop",
    price: 39.99,
    image: "/images/games/deathloop.jpg",
    rating: 4.5,
    platform: "PS5",
    genre: "Action"
  },
  {
    id: 15,
    title: "Ghost of Tsushima",
    price: 49.99,
    image: "/images/games/ghost-of-tsushima.jpg",
    rating: 4.8,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 16,
    title: "Assassin's Creed Mirage",
    price: 49.99,
    image: "/images/games/ac-mirage.jpg",
    rating: 4.4,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 17,
    title: "Star Wars Jedi: Survivor",
    price: 59.99,
    image: "/images/games/jedi-survivor.jpg",
    rating: 4.6,
    platform: "PS5",
    genre: "Action-Adventure"
  },
  {
    id: 18,
    title: "Diablo IV",
    price: 59.99,
    image: "/images/games/diablo4.jpg",
    rating: 4.5,
    platform: "PS5",
    genre: "Action RPG"
  },
  {
    id: 19,
    title: "Street Fighter 6",
    price: 59.99,
    image: "/images/games/street-fighter6.jpg",
    rating: 4.7,
    platform: "PS5",
    genre: "Fighting"
  },
  {
    id: 20,
    title: "Armored Core VI: Fires of Rubicon",
    price: 59.99,
    image: "/images/games/armored-core.jpg",
    rating: 4.6,
    platform: "PS5",
    genre: "Action"
  }
];

// Fallback image for when the game image fails to load
const fallbackImage = "/images/games/placeholder.svg";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  // Filter games based on search term, platform, and genre
  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'All' || game.platform === selectedPlatform;
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    return matchesSearch && matchesPlatform && matchesGenre;
  });

  // Sort games based on selected criteria
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  // Get unique platforms and genres for filters
  const platforms = ['All', ...new Set(gamesData.map(game => game.platform))];
  const genres = ['All', ...new Set(gamesData.map(game => game.genre))];

  return (
    <div className="games-container">
      <div className="games-header">
      <h2 style={{ color: 'white', fontSize:'40px' }} >Discover your favorite games</h2>
      </div>
      
      <Container className="games-filters mb-4">
        <Row className="g-3">
          <Col md={4}>
            <InputGroup>
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Control
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select 
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
      
      <Row className="games-grid">
        {sortedGames.length > 0 ? (
          sortedGames.map((game) => (
            <Col key={game.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="game-card h-100">
                <div className="game-image-container">
                  <Card.Img 
                    variant="top" 
                    src={game.image} 
                    alt={game.title} 
                    className="game-image" 
                    onError={handleImageError}
                  />
                  <div className="game-overlay">
                    <Badge bg="primary" className="game-platform">{game.platform}</Badge>
                    <Badge bg="success" className="game-genre">{game.genre}</Badge>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="game-title">{game.title}</Card.Title>
                  <div className="game-rating mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(game.rating) ? "star-filled" : "star-empty"} 
                      />
                    ))}
                    <span className="rating-value">{game.rating}</span>
                  </div>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="game-price">${game.price}</span>
                    <Button 
                      variant="primary" 
                      className="view-details-btn"
                      as={Link} 
                      to={`/games/${game.id}`}
                    >
                      <FaShoppingCart /> View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center py-5">
            <h3>No games found matching your criteria</h3>
            <p>Try adjusting your filters</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Games; 