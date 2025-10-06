import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.personalInformation}>
        <img src="/src/assets/person.jpg" alt="" />
        <div className={style.info}>
          <h1>Hey! I'm Sidenote.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className={style.subscription}>
            <b>Subscribe to my newsletter</b>
            <div className={style.inputSubs}>
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.element} ${style.updates}`}>
        <h2>Updates</h2>
        <div className={style.containerUpdates}>
          <div className={`${style.card} ${style.item1}`}></div>
          <div className={`${style.card} ${style.item2}`}></div>
          <div className={`${style.card} ${style.item3}`}></div>
          <div className={`${style.card}`}></div>
          <div className={`${style.card}`}></div>
        </div>
      </div>
      <div className={`${style.element}`}>
        <h2>My Links</h2>
        <div className={style.myLinks}>
          <div className={`${style.cardLink}`}></div>
          <div className={`${style.cardLink}`}></div>
          <div className={`${style.cardLink}`}></div>
          <div className={`${style.cardLink}`}></div>
        </div>
      </div>
      <div className={`${style.element}`}>
        <h2>Portfolio</h2>
        <div className={`${style.portfolio}`}>
          <div className={`${style.card} ${style.itemPortfolio1}`}></div>
          <div className={`${style.card} ${style.itemPortfolio2}`}></div>
          <div className={`${style.card} ${style.itemPortfolio3}`}></div>
          <div className={`${style.card} ${style.itemPortfolio4}`}></div>
        </div>
      </div>
      <div className={`${style.element}`}>
        <h2>Webs</h2>
        <div className={style.webs}>
          <div className={`${style.cardWeb}`}></div>
          <div className={`${style.cardWeb}`}></div>
          <div className={`${style.cardWeb}`}></div>
          <div className={`${style.cardWeb}`}></div>
        </div>
      </div>
    </div>
  );
}
