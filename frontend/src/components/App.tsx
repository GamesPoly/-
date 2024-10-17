import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Home from "../views/Home/Home";
import Profile from "../views/Profile/Profile";
import Catalog from "../views/Catalog/Catalog";
import TeamsPage from "../views/TeamsPage/TeamsPage";
import Auth from "../views/Auth/Auth";
import PostForm from "../views/PostForm/PostForm";
import PopularGames from "../views/PopularGames/PopularGames";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../views/Registration/Registration";
import MenuWindow from "./MenuWindow/MenuWindow";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import Game from "../views/Game/Game";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setLastScrollY(currentScrollY);
      setShowHeader(false);
    } else {
      setLastScrollY(currentScrollY);
      setShowHeader(true);
    }
  };

  useEffect(() => {
    setLastScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {isMenuOpen && <div className="jumbo jumbo--dark"></div>}
      <BrowserRouter>
        <div className={isMenuOpen ? "screen screen--left" : "screen"}>
          <Header openMenu={openMenu} showHeader={showHeader} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/games" element={<Catalog />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/post-form" element={<PostForm />} />
            <Route path="/popular-games" element={<PopularGames />} />
            <Route path="/games/:id" element={<Game />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
        <MenuWindow isOpen={isMenuOpen} closeMenu={closeMenu} />
      </BrowserRouter>
    </div>
  );
};

export default App;
