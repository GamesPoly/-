import React, { useState, useEffect } from "react";
import "./Footer.scss";
import logo from "@assets/logo.svg";
import vk from "@assets/vk.svg";
import tg from "@assets/tg.svg";
import { useLocation } from "react-router-dom";

const Footer = ({ setIsVisible }) => {
  const location = useLocation();
  const pages = ['/about-us']

  useEffect(() => {
    if (!pages.includes(location.pathname)){
      setIsVisible(false)
    }
  }, [location.pathname]);

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__details">
          <li>
            <img
              src={logo}
              alt="PolyGames Logo Image"
              className="aside-settings__icon"
            />
          </li>
          <li>
            <p>
              О нас
              <br />
              Контакты
            </p>
          </li>
          <li>
            <p>
              FAQ
              <br />
              Разработчикам
            </p>
          </li>
          <li>
            <p>
              Пользовательское соглашение
              <br />
              Политика конфиденциальности
            </p>
          </li>
          <li>
            <div className="footer__social">
              <img src={vk} alt="Иконка VK" />
              <img src={tg} alt="Иконка TG" />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
