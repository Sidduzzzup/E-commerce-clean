import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './stores/Context/CartContext';
import './App.css';

// Import all pages
import Landingpage from './stores/pages/Landingpage';
import Tvpage from './stores/pages/Tvpage';
import RussianLanding from './stores/pages/RussianLanding';
import ComputersPage from './stores/pages/ComputersPage';
import ComputersSingle from './stores/SinglesPages/ComputersSingle';
import TvSingle from './stores/SinglesPages/TvSingle';
import AcPage from './stores/pages/AcPage';
import AcSingle from './stores/SinglesPages/AcSingle';
import MobilesPage from './stores/pages/MobilesPage';
import MobilesSingle from './stores/SinglesPages/MobilesSingle';
import FridgePage from './stores/pages/FridgePage';
import FridgeSingle from './stores/SinglesPages/FridgeSingle';
import WatchPage from './stores/pages/WatchPage';
import WatchSingle from './stores/SinglesPages/WatchSingle';
import MenPage from './stores/pages/MenPage';
import WomenPage from './stores/pages/WomenPage';
import KitchenPage from './stores/pages/KitchenPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import FurniturePage from './stores/pages/FurniturePage';
import MenSingle from './stores/SinglesPages/MenSingle';
import WomenSingle from './stores/SinglesPages/WomenSingle';
import KitchenSingle from './stores/SinglesPages/KitchenSingle';
import SpeakerSingle from './stores/SinglesPages/SpeakerSingle';
import FurnitureSingle from './stores/SinglesPages/FurnitureSingle';
import UserCart from './stores/UserCart';
import JapaneseNavbar from './stores/components/JapaneseNavbar';
import Navbarr from './stores/components/Navbarr';
import LoginPage from './stores/pages/LoginPage';
import SignupPage from './stores/pages/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './stores/pages/ProfilePage';
import GamesPage from './stores/pages/GamesPage';
import GameDetail from './stores/pages/GameDetail';
import TopSalesProducts from './stores/components/TopSalesProducts';
import Bookpage from './stores/pages/BookPage';
import BookSingle from './stores/SinglesPages/BookSingle';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="mainpart">
          <Navbarr />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Landingpage />} />
            <Route path="/Tvs" element={<Tvpage />} />
            <Route path="/russ" element={<RussianLanding />} />
            <Route path="/japanese" element={<JapaneseNavbar />} />
            <Route path="/coms" element={<ComputersPage />} />
            <Route path="/acs" element={<AcPage />} />
            <Route path="/mob" element={<MobilesPage />} />
            <Route path="/fridge" element={<FridgePage />} />
            <Route path="/books" element={<Bookpage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            <Route path="/speaker" element={<SpeakersPage />} />
            <Route path="/fur" element={<FurniturePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/top-sales" element={<TopSalesProducts />} />
            

            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected routes */}
            <Route path="/cart" element={
              <PrivateRoute>
                <UserCart />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } />

            {/* Product detail routes */}
            <Route path="/Tvsss/:id" element={<TvSingle />} />
            <Route path="/Computers/:id" element={<ComputersSingle />} />
            <Route path="/acss/:id" element={<AcSingle />} />
            <Route path="/mobs/:id" element={<MobilesSingle />} />
            <Route path="/fridges/:id" element={<FridgeSingle />} />
            <Route path="/watches/:id" element={<WatchSingle />} />
            <Route path="/menss/:id" element={<MenSingle />} />
            <Route path="/womenss/:id" element={<WomenSingle />} />
            <Route path="/kitchens/:id" element={<KitchenSingle />} />
            <Route path="/speakerss/:id" element={<SpeakerSingle />} />
            <Route path="/furs/:id" element={<FurnitureSingle />} />
            <Route path="/books/:id" element={<BookSingle />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
