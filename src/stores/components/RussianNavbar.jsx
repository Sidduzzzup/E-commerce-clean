import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { FaGem } from "react-icons/fa6";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import RussianBanners from './RussianBanners';
import './RussianNavbar.css';

function RussianNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (<>
    <Navbar className="russian-navbar">
      <Container>
        <Navbar.Brand href="/">Сизонский базар</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><FaHome /> Дом</Nav.Link>
            <Nav.Link href="/Tvs"><FaTv /> Электроника</Nav.Link>
            <Nav.Link href="https://www.playstation.com/en-in/ps5/"><FaGamepad /> Игровая приставка</Nav.Link>
            <Nav.Link href="#"><FaShirt /> Мода</Nav.Link>
            <Nav.Link href="#"><FaGem /> Сиддарт Коне</Nav.Link>

            <NavDropdown title="Дополнительно" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Корейская версия</NavDropdown.Item>
              <NavDropdown.Item href="#">Японская эксклюзивная</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#">Получить купоны</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/russ">русский</Nav.Link>
            <Nav.Link href="/japanese">日本</Nav.Link>
          </Nav>

          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Поиск</Button>
          </Form>

          <div className="cart">
            <Nav.Link href="/cart">
              <FaCartPlus /> Корзина
            </Nav.Link>
          </div>

          <div className="right-corner">
            {user ? (
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <img 
                      src={user.photoURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAGFBMVEX////VKx4AOabM0OYAIKAAOqysMFXYKxcmC+07AAAA5klEQVR4nO3QgU0DARAEsd9LQvrvGDRdINkl+HkAAAAAAAAAAAAAAAAAAPg/XryeN+/nOAknIRJOQiSchEg4CZFwEiLhJETCSYiEkxAJJyESTkIknIRIOAmRcBIi4SREwkmIhJMQCSchEk5CJJyESDgJkXASIuEkRMJJiISTEAknIRJOQiSchDwfPs8PP8+X7zMmYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIi4c8vbmXB/YVGyysAAAAASUVORK5CYII='} 
                      alt="Profile" 
                      className="profile-image"
                    />
                    <span className="ms-2">{user.displayName || 'Пользователь'}</span>
                  </div>
                }
                id="user-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  <FaUser className="me-2" /> Мой профиль
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" /> Выйти
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">
                <img 
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACtCAMAAABhsvGqAAAAGFBMVEX////VKx4AOabM0OYAIKAAOqysMFXYKxcmC+07AAAA5klEQVR4nO3QgU0DARAEsd9LQvrvGDRdINkl+HkAAAAAAAAAAAAAAAAAAPg/XryeN+/nOAknIRJOQiSchEg4CZFwEiLhJETCSYiEkxAJJyESTkIknIRIOAmRcBIi4SREwkmIhJMQCSchEk5CJJyESDgJkXASIuEkRMJJiISTEAknIRJOQiSchDwfPs8PP8+X7zMmYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIiYRIi4c8vbmXB/YVGyysAAAAASUVORK5CYII=' 
                  alt="Profile" 
                />
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <RussianBanners />

    </>
  );
}

export default RussianNavbar;
