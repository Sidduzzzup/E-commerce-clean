import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaSignOutAlt, FaCartPlus } from "react-icons/fa";
import './JapaneseNavbarcss.css';
import Products from './Products';

import Banner from './Banner';
import { Ban } from 'lucide-react';
import { BiSolidUserAccount } from "react-icons/bi";

function JapaneseNavbar() {
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="navbar-brand">
            <img src="/assets/sizonbazar_logo_1.png" alt="Sizon" className="navbar-logo" />
          </Link>

          {/* Main Navigation */}
          <div className="nav-links">
            {/* Articles Dropdown */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setIsArticlesOpen(true)}
              onMouseLeave={() => setIsArticlesOpen(false)}
            >
              <button className="nav-link dropdown-toggle">Articles</button>
              {isArticlesOpen && (
                <div className="dropdown-menu">
                  <Link to="/" className="dropdown-item">Blog</Link>
                  <Link to="/" className="dropdown-item">Exclusive Games</Link>
                  <Link to="/" className="dropdown-item">Laravel Bytes</Link>
                  <Link to="/" className="dropdown-item">Ruby Dispatch</Link>
                  <Link to="/" className="dropdown-item">Electronics</Link>
                  <Link to="/" className="dropdown-item">Japanese</Link>
                </div>
              )}
            </div>

            <Link to="/" className="nav-link">シゾンバザール</Link>
            <Link to="/games" className="nav-link">エレクトロニクス</Link>
            <Link to="/" className="nav-link">プレイステーション</Link>
            <Link to="/" className="nav-link">ファッション</Link>
            <Link to="/" className="nav-link">EN</Link>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            {user ? (
              <div className="user-section">
                <div className="user-dropdown">
                  <div className="user-profile">
                    {/* <img 
                      src={user.photoURL || '/assets/default-profile.png'} 
                      alt="Profile" 
                      className="profile-image"
                    /> */}
                    <BiSolidUserAccount style={{height: '35px', width: '35px', marginRight: '20px'}} />
                  </div>
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                      <FaUser className="icon" /> プロフィール
                    </Link>
                    <Link to="/cart" className="dropdown-item">
                      <FaCartPlus className="icon" /> カート
                    </Link>
                  </div>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt className="icon" />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="sign-in-btn">サインイン</Link>
                <Link to="/signup" className="get-started-btn">始めましょう</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <Banner />

      <Products />
    </>
  );
}

export default JapaneseNavbar;

