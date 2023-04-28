import Image from "next/image";
import style from "./Header.module.css";
import Head from "next/head";
import { HiMenu } from "react-icons/hi";
import { MouseEventHandler, useState } from "react";

const Header = () => {
  const [menuShow, setMenuShow] = useState(true);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"
        />
        <link rel="shortcut icon" href="/favicon2.ico" />
      </Head>
      <header className="lg:px-22 md:px-15 px-5 5xl:pt-32 xxl:pt-40 md:pt-24 pt-13 flex items-center justify-between">
        <div className={style.logo}>
          <Image src="./asset/images/logo.svg" fill alt="addmin logo" />
        </div>
        <nav className="flex 5xl:gap-24 xxl:gap-17 lg:gap-10 md:gap-6 gap-3 items-center">
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
          <HiMenu
            className={`${style.menu} ${
              menuShow ? "text-white" : "text-main-orange"
            }`}
            onClick={() => setMenuShow((prev) => !prev)}
          />
        </nav>
      </header>
      {!menuShow && (
        <ul className={style["nav-links-small"]}>
          <a href="#services">
            <li key="header-services-small">Services</li>
          </a>
          <a href="#pricing">
            <li key="header-pricing-small">Pricing</li>
          </a>
          <a href="#faq">
            <li key="header-faq-small">FAQ</li>
          </a>
        </ul>
      )}
    </>
  );
};

export default Header;
