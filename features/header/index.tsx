import Image from "next/image";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className="px-22 pt-46 flex items-center justify-between">
      <div className="relative w-78 h-12">
        <Image src="./assets/images/logo.svg" fill alt="addmin logo" />
      </div>
      <nav className="flex gap-24 items-center">
        <ul className={style["nav-links"]}>
          <a href="#services">
            <li key="header-services">Services</li>
          </a>
          <a href="#pricing">
            <li key="header-pricing">Pricing</li>
          </a>
          <a href="#faq">
            <li key="header-faq">FAQ</li>
          </a>
        </ul>
        <button className={style.cta}>Get APP Free</button>
      </nav>
    </header>
  );
};

export default Header;
