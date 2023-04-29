import Header from "@/features/header";
import style from "./Home.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { FAQ } from "../features/faq/FAQ";
import { HiOutlineChevronDown } from "react-icons/hi";
import Footer from "@/features/footer";

export default function Home() {
  const [show, setShow] = useState({ id: 0, state: false });
  const [toggles, setToggles] = useState([true, false, false]);
  const [mockupSrc, setMockupSrc] = useState("/asset/images/frame1.png");
  const [monthly, setMonthly] = useState(false);
  const firstToggle = useRef<HTMLInputElement | null>(null);
  const secondToggle = useRef<HTMLInputElement | null>(null);
  const thirdToggle = useRef<HTMLInputElement | null>(null);
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
            } transform transition duration-400 xxl:-right-2 xl:-right-12 lg:-right-10 md:-right-13 -right-15 absolute xl:text-6xl lg:text-5.5xl md:text-5xl text-4.5xl top-1/2 -translate-y-1/2 text-blue-ryb`}
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

  const toggleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "first") {
      secondToggle.current!.checked = false;
      thirdToggle.current!.checked = false;
      let newToggles = toggles;
      newToggles = [true, false, false];
      setToggles(newToggles);
      if (e.target.checked) {
        setMockupSrc("/asset/images/frame1.png");
      }
    } else if (e.target.name === "second") {
      firstToggle.current!.checked = false;
      thirdToggle.current!.checked = false;
      let newToggles = toggles;
      newToggles = [false, true, false];
      setToggles(newToggles);
      if (e.target.checked) {
        setMockupSrc("/asset/images/frame2.png");
      }
    } else if (e.target.name === "third") {
      secondToggle.current!.checked = false;
      firstToggle.current!.checked = false;
      let newToggles = toggles;
      newToggles = [false, false, true];
      setToggles(newToggles);
      if (e.target.checked) {
        setMockupSrc("/asset/images/frame3.png");
      }
    }
  };

  return (
    <>
      <Header />
      <main className="xxl:pt-56 xl:pt-50 lg:pt-44 md:pt-35 pt-20 overflow-hidden">
        {/* /* ------------------------------ Hero Section ------------------------------  */}
        <section className="5xl:px-25 xl:px-22 px-17 lg:flex lg:flex-row items-center flex flex-col-reverse justify-between">
          <div className="xl:w-184 xxl:h-188 xl:h-172 lg:w-176 lg:h-134 h-auto lg:mt-0 md:mt-20 mt-15 flex-col flex justify-between">
            <h2 className={style.tagline}>
              <span className={style["tagline-span"]}> add</span> an admin in a{" "}
              <span className={style["tagline-span"]}>min!</span>
            </h2>
            <div className="font-InterBold 5xl:text-5.5xl xxl:text-4.5xl xl:text-4xl md:text-3xl text-base lg:my-0 md:my-13 my-10 lg:px-0 md:px-25 lg:text-left text-center">
              <p>Don’t Share the Password!</p>
              <p className="5xl:mt-10 xxl:mt-4 xl:mt-3">
                Access & Permitting Admins
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <button className={style["hero-cta"]}>Get started free</button>
              <p className="font-InterBold 5xl:text-3xl xxl:text-2.5xl xl:text-2xl md:text-xl text-sm lg:mt-9 md:mt-6 mt-4">
                No credit card requirement
              </p>
            </div>
          </div>
          <div className={style["hero-img"]}>
            <Image
              alt="hero section screenshot"
              src="/asset/images/1-screenshot.png"
              fill
            ></Image>
          </div>
        </section>
        {/* /* ------------------------------- 2nd section ------------------------------  */}
        <section className="5xl:mt-90 xxl:mt-78 md:mt-60 mt-36 lg:px-36 md:px-28 px-10 xl:pb-92 lg:pb-82 pb-40">
          <p className="text-main-orange font-InterBlack 5xl:text-7.5xl xxl:text-7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-3xl text-2xl 5xl:mb-0 xxl:mb-2">
            2,900,000
          </p>
          <p className="font-InterExtraBold 5xl:text-7.5xl xxl:text-7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-3xl">
            <span className="text-main-orange font-InterExtraBold 5xl:text-7.5xl xxl:7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-3xl 4xs:text-2xl">
              Instagram Business Accounts
            </span>{" "}
            Disappeared Just By Sharing the Password and being Granted Full
            Access by someone else!
          </p>
          <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-5xl xl:text-4.5xl lg:text-3xl md:text-2xl 3xs:text-lg 4xs:text-base xxl:mt-15 md:mt-17 mt-10">
            -- crunchbase 2020
          </p>
          {/* toggle button and motto */}
          <div className="5xl:mt-108 xxl:mt-90 xl:mt-80 lg:mt-70 md:mt-60 mt-40 flex justify-center items-center xl:gap-9 lg:gap-6 md:gap-4 gap-2 -mx-28">
            <div className="relative 5xl:w-35 5xl:h-17 xxl:w-32 xxl:h-13 xl:w-25 xl:h-12 lg:w-20 lg:h-10 md:w-16 md:h-10 w-12 h-5">
              <Image
                src="/asset/images/toggle-button.svg"
                fill
                alt="addmin logo and toggle button"
              />
            </div>
            {/* text animation  */}
            <p className="font-InterExtraBold 5xl:text-7.5xl xxl:text-6xl xl:text-5.5xl lg:text-5xl md:text-4.5xl text-xl">
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
        <span id="services" />
        {/* /* ------------------------------- 3rd section ------------------------------  */}
        <section className="bg-white xl:pt-48 lg:pt-35 pt-25 xl:pb-50 lg:pb-35 md:px-22 px-17 pb-24">
          <p className="font-InterExtraBold 5xl:text-7.5xl xxl:text-7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-3xl text-2xl text-black text-center xl:mb-50 lg:mb-35 mb-20">
            Easily manage as a{" "}
            <span className="font-InterExtraBold 5xl:text-7.5xl xxl:text-7xl xl:text-6xl lg:text-5.5xl text-main-orange">
              Toggle!
            </span>
          </p>
          <div className="xl:px-52 lg:px-32 flex justify-center">
            <div className="relative 5xl:w-[42rem] xl:w-176 5xl:h-[62rem] xxl:h-192 xl:h-188 lg:w-176 lg:h-186 5xl:-mt-5 xxl:-mt-10 xl:-mt-8 lg:-mt-5 lg:block hidden">
              <Image alt="phone demo" fill src={mockupSrc} />
            </div>
            <div className="5xl:w-120 xxl:w-120 xl:w-112 lg:w-105 flex flex-col 5xl:gap-12 xxl:gap-10 lg:gap-8 gap-8 md:px-20">
              {/* first toggle  */}
              <div className="flex flex-col 5xl:gap-5 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4.5xl xxl:text-4xl xl:text-3xl text-2xl xxl:leading-10 xl:leading-7 5xl:leading-[3rem]">
                  add an admin passwordless
                </h3>
                <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl text-xl leading-5 text-main-text_grey2 5xl:leading-10 xl:leading-7">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    ref={firstToggle}
                    value=""
                    className="sr-only peer"
                    name="first"
                    defaultChecked={toggles[0] ? true : false}
                    onChange={toggleHandler}
                  />
                  <div className="5xl:w-28 5xl:h-13 xxl:w-22 xxl:h-10 xl:w-17 xl:h-8 lg:w-16 lg:h-7 5xl:after:h-11 5xl:after:w-11 xxl:after:w-8 xxl:after:h-8 xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[5px] 5xl:after:left-[10px] xxl:after:top-[4.5px] xxl:after:left-[10px] xl:after:top-[3.5px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full  after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 2nd toggle  */}
              <div className="flex flex-col 5xl:gap-5 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4.5xl xxl:text-4xl xl:text-3xl text-2xl xl:leading-7 5xl:leading-[3.5rem]">
                  send & schedule posts
                </h3>
                <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl text-xl leading-5 5xl:leading-10 xl:leading-7 text-main-text_grey2">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    ref={secondToggle}
                    name="second"
                    value=""
                    className="sr-only peer"
                    defaultChecked={toggles[1] ? true : false}
                    onChange={toggleHandler}
                  />
                  <div className="5xl:w-28 5xl:h-13 xxl:w-22 xxl:h-10 xl:w-17 xl:h-8 lg:w-16 lg:h-7 5xl:after:h-11 5xl:after:w-11 xxl:after:w-8 xxl:after:h-8 xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[5px] 5xl:after:left-[10px] xxl:after:top-[4.5px] xxl:after:left-[10px] xl:after:top-[3.5px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 3rd toggle  */}
              <div className="flex flex-col 5xl:gap-5 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4.5xl xxl:text-4xl xl:text-3xl text-2xl lg:text-2xl xl:leading-7 5xl:leading-[3.5rem]">
                  approve contents
                </h3>
                <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl text-xl leading-5 5xl:leading-10 xl:leading-7 text-main-text_grey2">
                  Never be afraid to give your Instagram account to a stranger
                  freelancer, or agency.{" "}
                </p>
                {/* ----- toggle button  */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    ref={thirdToggle}
                    type="checkbox"
                    name="third"
                    value=""
                    className="sr-only peer"
                    defaultChecked={toggles[2] ? true : false}
                    onChange={toggleHandler}
                  />
                  <div className="5xl:w-28 5xl:h-13 xxl:w-22 xxl:h-10 xl:w-17 xl:h-8 lg:w-16 lg:h-7 5xl:after:h-11 5xl:after:w-11 xxl:after:w-8 xxl:after:h-8 xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[5px] 5xl:after:left-[10px] xxl:after:top-[4.5px] xxl:after:left-[10px] xl:after:top-[3.5px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </section>
        <span id="faq" />
        {/* /* ------------------------------- 4th section ------------------------------  */}
        <section className="xxl:pt-56 xl:pt-46 lg:pt-32 pt-44 xxl:pb-70 xl:pb-62 lg:pb-50 md:pb-20 pb-32 xxl:px-35 xl:px-32 lg:px-28 md:px-22 px-10">
          <p className="font-InterExtraBold xxl:text-7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-4.5xl text-3xl text-main-orange">
            The Questions
          </p>
          <p className="font-InterExtraBold xxl:text-7xl xl:text-6xl lg:text-5.5xl md:text-5xl 3xs:text-4.5xl text-3xl xxl:mb-46 lg:mb-50 md:mb-35 4xs:mb-32 mb-28 mt-2">
            You may Asking
          </p>
          <ul className="select-none">{questionsItems}</ul>
        </section>
        <span id="pricing" />
        {/* /* ------------------------------- 5th section ------------------------------ */}
        <section className="bg-white md:px-24 px-5 pt-25 5xl:pt-40 relative">
          {/* titles */}
          <div className="lg:flex block justify-between items-start xxl:pb-48 xl:pb-36 lg:pb-28 pb-12">
            <div className={style["pricing-title"]}>
              <p className="text-black lg:leading-12 leading-10">
                Keep your Account
              </p>
              <p className="text-main-orange 5xl:mt-5 xxl:mt-3 lg:-mt-5 md:-mt-0 3xs:-mt-1">
                Insured
              </p>
            </div>
            <div className="flex lg:gap-7 gap-3 justify-center items-center 5xl:pt-7 xxl:pt-2 xl:pt-1 lg:pt-0 pt-12">
              <p className="text-black font-InterBold 5xl:text-5.5xl xxl:text-5xl xl:text-4.5xl md:text-3xl text-2xl">
                Monthly
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  defaultChecked={monthly ? true : false}
                  onClick={() => {
                    setMonthly((prev) => !prev);
                  }}
                />
                <div className="5xl:w-28 5xl:h-13 xxl:w-22 xxl:h-10 xl:w-17 xl:h-8 lg:w-16 lg:h-7 md:w-20 md:h-8 w-17 h-7 5xl:after:h-11 5xl:after:w-11 xxl:after:w-8 xxl:after:h-8 xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 md:after:w-7 md:after:h-7 after:w-6 after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[5px] 5xl:after:left-[10px] xxl:after:top-[4.5px] xxl:after:left-[10px] xl:after:top-[3.5px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] md:after:left-[8px] md:after:top-[0.1rem] after:top-[0.1rem] after:left-[7px] after:bg-white after:border-main-button_grey after:border after:rounded-full after:transition-all peer-checked:bg-main-orange"></div>
              </label>
              <p className="text-main-orange font-InterBold 5xl:text-5.5xl xxl:text-5xl xl:text-4.5xl md:text-3xl text-2xl">
                Yearly
              </p>
            </div>
          </div>
          {/* pricing */}
          {!monthly && (
            <div className="5xl:pb-184 xxl:pb-166 xl:pb-132 lg:pb-100 md:pb-72 pb-60 lg:flex lg:flex-row lg:justify-between lg:items-end flex flex-col items-center xxl:mx-0 xl:-mx-10 lg:-mx-17">
              {/* first  */}
              <div className="bg-black 5xl:w-134 xxl:w-100 5xl:h-176 xxl:h-166 xl:w-92 xl:h-156 lg:w-76 lg:h-136 md:w-120 md:h-140 w-80 h-147 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5xl text-4.5xl">
                    Air Flow
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl text-main-orange pt-7">
                    10 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl pb-5">
                    Unlimited IG accounts <br />
                    Unlimited admins
                    <br /> Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl text-4.5xl text-main-orange">
                    Free
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-white text-black rounded-full hover:scale-95 duration-300 transition ease-out text-center">
                  Start free
                </button>
              </div>
              {/* second */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-184 5xl:h-[52rem] xl:w-82 xl:h-172 lg:w-76 lg:h-[40rem] md:w-120 md:h-140 w-80 h-147 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterBold text-black 5xl:text-4xl xxl:text-3xl text-2xl -mt-4">
                    *Popular*{" "}
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-4.5xl text-4xl text-black pt-7">
                    Family Lunch
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl text-main-orange 5xl:pt-7 xxl:pt-5 xl:pt-14 pt-10">
                    720 content / year
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-xl text-black pb-5">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-4.5xl text-4xl text-main-orange">
                    <span className="line-through 5xl:text-4xl text-3xl">
                      25$/m
                    </span>{" "}
                    18$/m
                  </p>
                  <p className="font-InterBold text-black pt-2 xxl:text-xl xl:text-lg lg:text-base text-lg">
                    billed <span className="line-through">$300</span> $216/year
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
              {/* third  */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 5xl:h-176 xxl:h-166 xl:w-92 xl:h-156 lg:w-76 lg:h-136 md:w-120 md:h-140 w-80 h-147 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-4.5xl md:text-4xl text-3xl text-black">
                    Cinema Ticket
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-2xl text-main-orange pt-7">
                    60 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-xl pb-5 text-black">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-4.5xl text-4xl text-main-orange">
                    <span className="line-through 5xl:text-4xl text-3xl">
                      9$/m
                    </span>{" "}
                    7$/m
                  </p>
                  <p className="font-InterBold text-black pt-1 xxl:text-xl xl:text-lg lg:text-base text-lg">
                    billed <span className="line-through">$108</span> $84/year
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
            </div>
          )}
          {monthly && (
            <div className="5xl:pb-184 xxl:pb-166 xl:pb-132 lg:pb-100 md:pb-72 pb-60 lg:flex lg:flex-row lg:justify-between lg:items-end flex flex-col items-center xxl:mx-0 xl:-mx-10 lg:-mx-17">
              {/* first  */}
              <div className="bg-black 5xl:w-134 xxl:w-100 5xl:h-176 xxl:h-166 xl:w-92 xl:h-156 lg:w-76 lg:h-136 md:w-120 md:h-140 w-80 h-147 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-start">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5xl text-4.5xl">
                    Air Flow
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl text-main-orange pt-7">
                    10 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl pb-5">
                    Unlimited IG accounts <br />
                    Unlimited admins
                    <br /> Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl text-4.5xl text-main-orange">
                    Free
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-white text-black rounded-full hover:scale-95 duration-300 transition ease-out">
                  Start free
                </button>
              </div>
              {/* second */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-184 5xl:h-[52rem] xl:w-82 xl:h-172 lg:w-76 lg:h-[40rem] md:w-120 md:h-140 w-80 h-147 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterBold text-black 5xl:text-4xl xxl:text-3xl text-2xl -mt-4">
                    *Popular*{" "}
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-4.5xl text-4xl text-black pt-7">
                    Family Lunch
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl text-2xl text-main-orange 5xl:pt-7 xxl:pt-5 xl:pt-14 pt-10">
                    60 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-xl text-black pb-5">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-4.5xl text-4xl text-main-orange">
                    25$/m
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
              {/* third  */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 5xl:h-176 xxl:h-166 xl:w-92 xl:h-156 lg:w-76 lg:h-136 md:w-120 md:h-140 w-80 h-147 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 pt-20 pb-14 flex flex-col justify-between items-start">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-4.5xl md:text-4xl text-3xl text-black">
                    Cinema Ticket
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-2xl text-main-orange pt-7">
                    24 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-4xl xxl:text-3xl xl:text-2xl text-xl pb-5 text-black">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-4.5xl text-4xl text-main-orange">
                    7$/m
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-4xl xxl:text-3xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
            </div>
          )}
          <div className="absolute 5xl:w-[986px] 5xl:h-[579px] xxl:w-[900px] xxl:h-[500px] xl:w-[700px] xl:h-[420px] lg:w-[600px] lg:h-[360px] md:w-92 md:h-60 w-82 h-50 right-0 -bottom-4 md:-bottom-5 xl:-bottom-7 xxl:-bottom-9 5xl:-bottom-11">
            <Image alt="vector" fill src="/asset/images/vector.svg" />
          </div>
        </section>
        {/* /* --------------------------------- footer ---------------------------------  */}
        <Footer />
      </main>
    </>
  );
}
