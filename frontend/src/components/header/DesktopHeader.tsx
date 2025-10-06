import style from "./Header.module.css";

export default function DesktopHeader() {
  return (
    <header className={style.desktopHeader}>
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
      {/* SEARCH */}
      <div className={style.search}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={style.list}>
        {/* MY WORLD */}
        <div className={style.myWorld}>
          <div className={style.title}>MY WORLD</div>
          <p>Blog</p>
          <p>About</p>
        </div>
        {/* MY WORK */}
        <div className={style.myWorld}>
          <div className={style.title}>MY WORK</div>
          <p>Portfolio</p>
        </div>
        {/* CONNECT */}
        <div className={style.connect}>
          <div className={style.title}>CONNECT</div>
          <p>Contact me</p>
        </div>
      </div>
      {/* FOOTER */}
      <div className={style.footer}>
        {/* SUBSCRIBE */}
        <div className={style.subscribe}>
          <button>Subscribe</button>
        </div>
        <b></b>
      </div>
    </header>
  );
}

{
  /* 
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/projects">Projects</Link>
</nav> 
*/
}
