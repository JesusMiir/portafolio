import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function MobileHeader() {
  return (
    <header className={style.mobileHeader}>
      {/* MAIN INFO */}
      <div className={style.mainInfo}>
        <div className={style.logo}>
          <b>J</b>
        </div>
        <div>
          <b>Jesús Mercadal Mir</b>
          <p>Full stack developer</p>
        </div>
      </div>

      {/* HAMBURGER MENU */}
      <div className={style.menuHamburguer}>
        <img src="/src/assets/menu.png" alt="" />
      </div>

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </nav> */}
    </header>
  );
}
