import Header from "@/features/header";
import style from "./Home.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FAQ } from "../features/faq/FAQ";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "@/features/footer";

export default function Home() {
  const [show, setShow] = useState({ id: 0, state: false });
  const [itemSize, setItemSize] = useState(3);
  const questionsItems = FAQ.map((item, idx) => {
    const onClick = () => {
      setShow((prev) => {
        if (prev.id === idx) {
          if (prev.state) {
            return { id: prev.id, state: false };
          } else {
            return { id: idx, state: true };
          }
        } else if (prev.id !== idx) {
          return { id: idx, state: true };
        } else {
          return { id: prev.id, state: false };
        }
      });
    };

    return (
      <li className={style["list-item"]} key={item.question}>
        <p onClick={onClick}>
          <HiOutlineChevronDown
            className={`${
              show.state && idx === show.id
                ? "rotate-180 text-main-orange"
                : "rotate-0 "
            } transform transition duration-400 -right-2 absolute text-7xl top-1/2 -translate-y-1/2 text-blue-ryb`}
          />
          {item.question}
        </p>

        <span
          className={`${style["clps"]} ${
            show.state && idx === show.id
              ? style["collapsed"]
              : style["close-delay"]
          }`}
          dangerouslySetInnerHTML={{ __html: item.answer }}
        ></span>
      </li>
    );
  });

  return (
    <>
      <Header />
      <main className="pt-62">
        {/* /* ------------------------------ Hero Section ------------------------------  */}
        <section className="px-22 flex justify-between">
          <div className="w-184 h-188 flex-col flex justify-between">
            <h2 className={style.tagline}>
              <span className={style["tagline-span"]}> add</span> an admin in a{" "}
              <span className={style["tagline-span"]}>min!</span>
            </h2>
            <div>
              <p className="font-InterBold text-5.5xl">
                Don’t Share the Password!
              </p>
              <p className="font-InterBold text-5.5xl">
                Access & Permitting Admins
              </p>
            </div>
            <div>
              <button className={style["hero-cta"]}>Get started free</button>
              <p className="font-InterBold text-3xl mt-9">
                No credit card requirement
              </p>
            </div>
          </div>
          <div className="relative w-186 h-192">
            <Image
              alt="hero section screenshot"
              src="/assets/images/1-screenshot.png"
              fill
            ></Image>
          </div>
        </section>
        {/* /* ------------------------------- 2nd section ------------------------------  */}
        <section className="mt-90 px-36 pb-92">
          <p className="text-main-orange font-InterExtraBold text-7.5xl">
            2,900,000
          </p>
          <p className="font-InterExtraBold text-7.5xl">
            <span className="text-main-orange font-InterExtraBold text-7.5xl">
              Instagram Business Accounts
            </span>{" "}
            Disappeared Just By Sharing the Password and being Granted Full
            Access by someone else!
          </p>
          <p className="font-InterExtraBold text-5.5xl mt-15">
            -- crunchbase 2020
          </p>
          {/* toggle button and motto */}
          <div className="mt-108 flex justify-center items-center gap-9">
            <div className="relative w-35 h-17">
              <Image
                src="/assets/images/toggle-button.svg"
                fill
                alt="addmin logo and toggle button"
              />
            </div>
            {/* text animation  */}
            <p className="font-InterExtraBold text-7.5xl">
              <span>Don’t share your</span>{" "}
              <TypeAnimation
                sequence={[
                  "Life",
                  1000,
                  "Password",
                  1000,
                  "Page",
                  1000,
                  "Business",
                  1000,
                  "Asset",
                  1000,
                  "Time",
                  1000,
                ]}
                repeat={Infinity}
                style={{ color: "#FF782C" }}
              />
            </p>
          </div>
        </section>
        {/* /* ------------------------------- 3rd section ------------------------------  */}
        <section className="bg-white pt-48 pb-56">
          <p className="font-InterExtraBold text-7.5xl text-black text-center mb-58">
            Easily manage as a{" "}
            <span className="font-InterExtraBold text-7.5xl text-main-orange">
              Toggle!
            </span>
          </p>
          <div className="px-52 flex justify-between">
            <div className="relative w-192">
              <Image
                alt="phone demo"
                fill
                src="/assets/images/phone-frame-black.svg"
              />
            </div>
            <div className="w-147 flex flex-col gap-22">
              {/* first toggle  */}
              <div className="flex flex-col gap-6">
                <h3 className="font-InterExtraBold text-black text-5.5xl leading-12">
                  add an admin passwordless
                </h3>
                <p className="font-InterBold text-4.5xl leading-11 text-main-text_grey2">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-28 h-15 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[8px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:h-12 after:w-12 after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 2nd toggle  */}
              <div className="flex flex-col gap-6">
                <h3 className="font-InterExtraBold text-black text-5.5xl leading-12">
                  send & schedule posts
                </h3>
                <p className="font-InterBold text-4.5xl leading-11 text-main-text_grey2">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-28 h-15 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[8px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:h-12 after:w-12 after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 3rd toggle  */}
              <div className="flex flex-col gap-6">
                <h3 className="font-InterExtraBold text-black text-5.5xl leading-12">
                  approve contents
                </h3>
                <p className="font-InterBold text-4.5xl leading-11 text-main-text_grey2">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-28 h-15 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[8px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:h-12 after:w-12 after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </section>
        {/* /* ------------------------------- 4th section ------------------------------  */}
        <section className="pt-64 pb-90 px-35">
          <p className="font-InterExtraBold text-7.5xl text-main-orange">
            The Questions
          </p>
          <p className="font-InterExtraBold text-7.5xl mb-66">You may Asking</p>
          <ul>{questionsItems}</ul>
        </section>
        {/* /* ------------------------------- 5th section ------------------------------ */}
        <section className="bg-white px-24 pt-40 relative">
          {/* titles */}
          <div className="flex justify-between items-start pb-48">
            <div className="text-7.5xl font-InterExtraBold">
              <p className="text-black">Keep your Account</p>
              <p className="text-main-orange -mt-7">Insured</p>
            </div>
            <div className="flex gap-7 items-center pt-7">
              <p className="text-black font-InterBold text-5.5xl">Monthly</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-28 h-15 bg-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[8px] after:bg-white after:border-black after:border after:rounded-full after:h-12 after:w-12 after:transition-all peer-checked:bg-main-orange"></div>
              </label>
              <p className="text-main-orange font-InterBold text-5.5xl">
                Yearly
              </p>
            </div>
          </div>
          {/* pricing */}
          <div className="pb-184 flex justify-between items-end">
            {/* first  */}
            <div className="bg-black w-134 h-176 rounded-5xl px-13 pt-20 pb-14 flex flex-col justify-between items-start">
              {/* texts */}
              <div>
                <p className="font-InterExtraBold text-6xl">Air Flow</p>
                <p className="font-InterBold text-4xl text-main-orange pt-7">
                  10 content / month
                </p>
                <p className="font-InterBold text-4xl pb-5">
                  Unlimited IG accounts Unlimited admins Unlimited role access
                </p>
                <p className="font-InterExtraBold text-6xl text-main-orange">
                  Free
                </p>
              </div>
              {/* cta button  */}
              <button className="font-InterExtraBold text-4xl px-12 py-6 bg-white text-black rounded-full hover:scale-95 duration-300 transition ease-out">
                Start free
              </button>
            </div>
            {/* second */}
            <div className="bg-white border-4 border-black w-134 h-188 rounded-5xl px-13 pt-20 pb-14 flex flex-col justify-between items-start">
              {/* texts */}
              <div>
                <p className="font-InterBold text-black text-4xl -mt-4">
                  *Popular*{" "}
                </p>
                <p className="font-InterExtraBold text-6xl text-black pt-7">
                  Family Lunch
                </p>
                <p className="font-InterBold text-4xl text-main-orange pt-7">
                  30 content / month
                </p>
                <p className="font-InterBold text-4xl text-black pb-5">
                  Unlimited IG accounts Unlimited admins Unlimited role access
                </p>
                <p className="font-InterExtraBold text-6xl text-main-orange">
                  25$/m
                </p>
              </div>
              {/* cta button  */}
              <button className="font-InterExtraBold text-4xl px-12 py-6 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                Order now
              </button>
            </div>
            {/* third  */}
            <div className="bg-white border-4 border-black w-134 h-176 rounded-5xl px-13 pt-20 pb-14 flex flex-col justify-between items-start">
              {/* texts */}
              <div>
                <p className="font-InterExtraBold text-5.5xl text-black">
                  Cinema Ticket
                </p>
                <p className="font-InterBold text-4xl text-main-orange pt-7">
                  60 content / month
                </p>
                <p className="font-InterBold text-4xl pb-5 text-black">
                  Unlimited IG accounts Unlimited admins Unlimited role access
                </p>
                <p className="font-InterExtraBold text-6xl text-main-orange">
                  <span className="line-through text-4xl">9$/m</span> 7$/m
                </p>
              </div>
              {/* cta button  */}
              <button className="font-InterExtraBold text-4xl px-12 py-6 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                Order now
              </button>
            </div>
          </div>
          <div className="absolute w-[986px] h-[579px] right-0 bottom-0">
            <Image alt="vector" fill src="/assets/images/vector.svg" />
          </div>
        </section>
        {/* /* --------------------------------- footer ---------------------------------  */}
        <Footer />
      </main>
    </>
  );
}
