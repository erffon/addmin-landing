import Header from "@/features/header";
import style from "./Home.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState } from "react";
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
      <main className="xxl:pt-20 xl:pt-0 1.5xl:pt-36 xl:mt-0 lg:-mt-60 md:pt-35 pt-20 overflow-hidden">
        {/* /* ------------------------------ Hero Section ------------------------------  */}
        <section className="5xl:px-25 xl:px-22 px-17 lg:flex lg:flex-row items-center flex flex-col-reverse xxl:justify-center justify-between lg:h-screen xxl:-mt-32 1.5xl:-mt-44 xl:-mt-15">
          <div className="xl:w-184 xxl:h-188 1.5xl:w-[48rem] 1.5xl:h-[36rem] xl:h-172 lg:w-172 lg:h-134 h-auto lg:mt-0 md:mt-20 mt-15 flex-col flex justify-between">
            <h2 className={style.tagline}>
              <span className={style["tagline-span"]}> add</span> an admin in a{" "}
              <span className={style["tagline-span"]}>min!</span>
            </h2>
            <div className="font-InterBold xxl:text-4.5xl 1.5xl:text-2.5xl xl:text-3xl lg:text-2xl md:text-3xl text-base lg:my-0 md:my-13 my-10 lg:px-0 md:px-25 lg:text-left text-center xxl:mt-0">
              <p>Don’t Share the Password!</p>
              <p className="5xl:mt-6 xxl:mt-4 xl:mt-3 1.5xl:mt-2">
                Access & Permitting Admins
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center">
              <button className={style["hero-cta"]}>Get started free</button>
              <p className="font-InterBold 5xl:text-2.5xl xxl:text-2xl xl:text-2xl md:text-xl text-sm lg:mt-9 md:mt-6 mt-4">
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
        <section className="5xl:mt-40 xxl:mb-40 1.5xl:mb-0 xl:mb-0 lg:-mb-40 xxl:mt-50 xl:mt-15 lg:mt-6 md:mt-60 mt-36 1.5xl:px-82 lg:px-36 md:px-28 px-10 1.5xl:pb-0 xl:pb-0 lg:pb-0 pb-40 lg:h-screen">
          <p className="text-main-orange font-InterBlack 5xl:text-7.5xl xxl:text-6xl xl:text-5.5xl 1.5xl:text-5xl lg:text-5xl md:text-5xl 3xs:text-3xl text-2xl 5xl:mb-0 xxl:mb-2">
            2,900,000
          </p>
          <p className="font-InterExtraBold 5xl:text-7.5xl xxl:text-6xl xl:text-5.5xl lg:text-5xl md:text-5xl 3xs:text-3xl 1.5xl:text-5xl">
            <span className="text-main-orange font-InterExtraBold 5xl:text-7.5xl xxl:7xl xl:text-5.5xl lg:text-5xl md:text-5xl 3xs:text-3xl 4xs:text-2xl">
              Instagram Business Accounts
            </span>{" "}
            Disappeared Just By Sharing the Password and being Granted Full
            Access by someone else!
          </p>
          <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-5xl xl:text-4xl 1.5xl:text-2xl lg:text-2xl md:text-2xl 3xs:text-lg 4xs:text-base xxl:mt-15 xl:mt-10 lg:mt-12 md:mt-17 mt-10">
            -- crunchbase 2020
          </p>
          {/* toggle button and motto */}
          <div className="5xl:mt-70 xxl:mt-90 1.5xl:mt-60 xl:mt-80 lg:mt-70 md:mt-60 mt-40 flex justify-center items-center xl:gap-9 lg:gap-6 md:gap-4 gap-2 -mx-28">
            <div className="relative 5xl:w-35 5xl:h-17 xxl:w-32 xxl:h-13 1.5xl:w-17 xl:w-20 xl:h-10 lg:w-17 lg:h-10 md:w-16 md:h-10 w-12 h-5">
              <Image
                src="/asset/images/toggle-button.svg"
                fill
                alt="addmin logo and toggle button"
              />
            </div>
            {/* text animation  */}
            <p className="font-InterExtraBold 5xl:text-7xl xxl:text-6xl 1.5xl:text-4.5xl xl:text-4.5xl lg:text-4.5xl md:text-4.5xl text-xl">
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
        <section className="bg-white lg:pt-22 pt-25 1.5xl:pt-15 xl:pb-50 lg:pb-35 xl:px-22 lg:px-10 md:px-22 px-17 pb-24 lg:h-screen">
          <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl 1.5xl:text-5xl xl:text-5xl lg:text-4.5xl md:text-5xl 3xs:text-3xl text-2xl text-black text-center 5xl:mb-12 xxl:mb-15 mb-20">
            Easily manage as a{" "}
            <span className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-5xl lg:text-4.5xl text-main-orange">
              Toggle!
            </span>
          </p>
          <div className="xxl:px-10 xl:px-10 lg:px-10 flex justify-center">
            <div className="relative 5xl:w-[31rem] xxl:w-[30rem] xl:w-[28rem] 5xl:h-[52rem] xxl:h-192 1.5xl:h-[40rem] 1.5xl:w-[25rem] xl:h-[47rem] lg:w-[42rem] lg:h-[48rem] 5xl:-mt-5 xxl:-mt-5 lg:-mt-0 lg:block hidden">
              <Image alt="phone demo" fill src={mockupSrc} />
            </div>
            <div className="5xl:w-[43rem] xxl:w-[38rem] xl:w-[35rem] lg:w-[38rem] flex flex-col justify-center 5xl:gap-12 xxl:gap-10 lg:gap-8 gap-8 xl:px-10 lg:px-0 md:px-20">
              {/* first toggle  */}
              <div className="flex flex-col 5xl:gap-2 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4xl xxl:text-3xl xl:text-2.5xl md:text-2xl text-xl xxl:leading-10 xl:leading-9 5xl:leading-[2.5rem]">
                  add an admin passwordless
                </h3>
                <p className="font-InterBold xxl:text-2xl xl:text-xl md:text-xl text-lg leading-5 text-main-text_grey2 5xl:leading-10 xl:leading-7">
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
                  <div className="5xl:w-20 5xl:h-9 xxl:w-[4.5rem] xxl:h-8 xl:w-15 xl:h-7 lg:w-16 lg:h-7 5xl:after:h-[1.8rem] 5xl:after:w-[1.8rem] xxl:after:w-[1.6rem] xxl:after:h-[1.6rem] xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[4px] 5xl:after:left-[10px] xxl:after:top-[4px] xxl:after:left-[12px] xl:after:top-[2px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full  after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 2nd toggle  */}
              <div className="flex flex-col 5xl:gap-5 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4xl xxl:text-3xl xl:text-2.5xl md:text-2xl text-xl xxl:leading-10 xl:leading-9 5xl:leading-[2.5rem]">
                  send & schedule posts
                </h3>
                <p className="font-InterBold 5xl:text-2xl xxl:text-2xl xl:text-xl md:text-xl text-lg leading-5 text-main-text_grey2 5xl:leading-10 xl:leading-7">
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
                  <div className="5xl:w-20 5xl:h-9 xxl:w-[4.5rem] xxl:h-8 xl:w-15 xl:h-7 lg:w-16 lg:h-7 5xl:after:h-[1.8rem] 5xl:after:w-[1.8rem] xxl:after:w-[1.6rem] xxl:after:h-[1.6rem] xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[4px] 5xl:after:left-[10px] xxl:after:top-[4px] xxl:after:left-[12px] xl:after:top-[2px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full  after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
              {/* 3rd toggle  */}
              <div className="flex flex-col 5xl:gap-5 xxl:gap-3 lg:gap-4 gap-2">
                <h3 className="font-InterExtraBold text-black 5xl:text-4xl xxl:text-3xl xl:text-2.5xl md:text-2xl text-xl xxl:leading-10 xl:leading-9 5xl:leading-[2.5rem]">
                  approve contents
                </h3>
                <p className="font-InterBold 5xl:text-2xl xxl:text-2xl xl:text-xl md:text-xl text-lg leading-5 text-main-text_grey2 5xl:leading-10 xl:leading-7">
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
                  <div className="5xl:w-20 5xl:h-9 xxl:w-[4.5rem] xxl:h-8 xl:w-15 xl:h-7 lg:w-16 lg:h-7 5xl:after:h-[1.8rem] 5xl:after:w-[1.8rem] xxl:after:w-[1.6rem] xxl:after:h-[1.6rem] xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[4px] 5xl:after:left-[10px] xxl:after:top-[4px] xxl:after:left-[12px] xl:after:top-[2px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:bg-white after:border-main-button_grey after:border after:rounded-full  after:transition-all peer-checked:bg-main-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </section>
        <span id="faq" />
        {/* /* ------------------------------- 4th section ------------------------------  */}
        <section className="5xl:pt-46 xxl:pt-36 xl:pt-24 lg:pt-20 md:pt-20 pt-44 5xl:pb-50 xxl:pb-44 xl:pb-32 lg:pb-20 md:pb-20 pb-32 xxl:px-35 xl:px-32 lg:px-28 md:px-22 px-10">
          <p className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-5xl lg:text-4.5xl md:text-4.5xl 3xs:text-4.5xl text-3xl text-main-orange">
            The Questions
          </p>
          <p
            className="font-InterExtraBold 5xl:text-6xl xxl:text-5.5xl xl:text-5xl lg:text-4.5xl md:text-4
          5xl 3xs:text-4.5xl text-3xl 5xl:mb-32 xxl:mb-28 lg:mb-24 md:mb-20 4xs:mb-32 mb-28 mt-2"
          >
            You may Asking
          </p>
          <ul className="select-none">{questionsItems}</ul>
        </section>
        <span id="pricing" />
        {/* /* ------------------------------- 5th section ------------------------------ */}
        <section className="bg-white md:px-24 px-5 pt-20 relative lg:h-screen pb-15">
          {/* titles */}
          <div className="lg:flex block justify-between items-center 5xl:pb-12 xxl:pb-17 xl:pb-15 lg:pb-24">
            <div className={style["pricing-title"]}>
              <p className="text-black xxl:leading-9 xl:leading-[6rem] lg:leading-12 leading-[3rem]">
                Keep your Account
              </p>
              <p className="text-main-orange 5xl:mt-5 xxl:mt-3 lg:-mt-4 md:-mt-0 3xs:-mt-1">
                Insured
              </p>
            </div>
            <div className="flex lg:gap-5 gap-3 justify-center items-center 5xl:-mt-15 xxl:-mt-17 xl:-mt-7 lg:-mt-9 lg:pt-0 pt-12 lg:pb-0 pb-8">
              <p className="text-black font-InterBold xxl:text-4.5xl xl:text-3xl lg:text-2xl text-2xl">
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
                <div className="5xl:w-20 5xl:h-9 xxl:w-[4.5rem] xxl:h-8 xl:w-15 xl:h-7 lg:w-16 lg:h-7 w-16 h-7 5xl:after:h-[1.8rem] 5xl:after:w-[1.8rem] xxl:after:w-[1.6rem] xxl:after:h-[1.6rem] xl:after:w-6 xl:after:h-6 lg:after:w-6 lg:after:h-6 after:w-6 after:h-6 bg-main-button_grey peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute 5xl:after:top-[4px] 5xl:after:left-[10px] xxl:after:top-[4px] xxl:after:left-[12px] xl:after:top-[2px] xl:after:left-[5px] lg:after:top-[1.8px] lg:after:left-[5px] after:left-2 after:top-[0.1rem] after:bg-white after:border-main-button_grey after:border after:rounded-full  after:transition-all peer-checked:bg-main-orange"></div>
              </label>
              <p className="text-main-orange font-InterBold xxl:text-4.5xl xl:text-3xl lg:text-2xl text-2xl">
                Yearly
              </p>
            </div>
          </div>
          {/* pricing */}
          {!monthly && (
            <div className="relative lg:flex lg:flex-row 1.5xl:justify-evenly lg:justify-between lg:items-end flex flex-col items-center xl:mx-0 lg:-mx-17 z-10">
              {/* first  */}
              <div className="bg-black 5xl:w-134 xxl:w-100 5xl:h-[40.5rem] xxl:h-147  xl:w-[21.5rem] xl:h-156 lg:w-76 lg:h-[37.5rem] md:w-[25rem] md:h-[34rem] w-80 h-136 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-1 lg:pt-24 md:pt-15 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-4.5xl md:text-4.5xl text-3xl">
                    Air Flow
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-main-orange pt-7">
                    10 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl pb-6 mt-2">
                    Unlimited IG accounts <br />
                    Unlimited admins
                    <br /> Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4.5xl md:text-4.5xl text-4xl text-main-orange 5xl:pt-5">
                    Free
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-white text-black rounded-full hover:scale-95 duration-300 transition ease-out text-center">
                  Start free
                </button>
              </div>
              {/* second */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-[42.5rem] 5xl:h-[48.5rem] xl:w-[21.5rem] xl:h-172 lg:w-76 lg:h-[43rem] md:w-[25rem] md:h-[36rem] w-80 h-[35rem] lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 md:pt-16 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterBold text-black 5xl:text-4xl xxl:text-2xl md:text-2xl text-xl -mt-4">
                    *Popular*{" "}
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-4xl md:text-4.5xl text-3xl text-black pt-7">
                    Family Lunch
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-main-orange 5xl:pt-7 xxl:pt-5 xl:pt-14 pt-10">
                    720 content / year
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-black pb-5 mt-2">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xl:text-4.5xl md:text-4.5xl text-3xl text-main-orange 5xl:pt-5">
                    <span className="line-through 5xl:text-3xl xxl:text-2xl md:text-3xl text-2xl">
                      25$/m
                    </span>{" "}
                    18$/m
                  </p>
                  <p className="font-InterBold text-black pt-2 xl:text-lg lg:text-base md:text-lg text-base">
                    billed <span className="line-through">$300</span> $216/year
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
              {/* third  */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-147 5xl:h-166 xl:w-[21.5rem] xl:h-156 lg:w-76 lg:h-[37.5rem] md:w-[25rem] md:h-[34rem] w-80 h-134 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 md:pt-15 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4xl md:text-4.5xl text-3xl text-black">
                    Cinema Ticket
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl md:text-2xl text-xl text-main-orange pt-7">
                    60 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl md:text-2xl text-xl pb-5 text-black mt-2">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4xl xl:text-4.5xl md:text-4.5xl text-3xl text-main-orange 5xl:pt-5">
                    <span className="line-through 5xl:text-3xl xxl:text-2xl md:text-3xl text-2xl">
                      9$/m
                    </span>{" "}
                    7$/m
                  </p>
                  <p className="font-InterBold text-black pt-1 xxl:text-lg xl:text-lg lg:text-base md:text-lg text-base">
                    billed <span className="line-through">$108</span> $84/year
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
            </div>
          )}
          {monthly && (
            <div className="relative lg:flex lg:flex-row 1.5xl:justify-evenly lg:justify-between lg:items-end flex flex-col items-center xl:mx-0 lg:-mx-17 z-10">
              {/* first  */}
              <div className="bg-black 5xl:w-134 xxl:w-100 5xl:h-[40.5rem] xxl:h-147  xl:w-[21.5rem] xl:h-156 lg:w-76 lg:h-[37.5rem] md:w-[25rem] md:h-[34rem] w-80 h-136 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-1 lg:pt-24 md:pt-15 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-4.5xl md:text-4.5xl text-3xl">
                    Air Flow
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-main-orange pt-7">
                    10 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl pb-6 mt-2">
                    Unlimited IG accounts <br />
                    Unlimited admins
                    <br /> Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4.5xl md:text-4.5xl text-4xl text-main-orange 5xl:pt-5">
                    Free
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-white text-black rounded-full hover:scale-95 duration-300 transition ease-out text-center">
                  Start free
                </button>
              </div>
              {/* second */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-[42.5rem] 5xl:h-[48.5rem] xl:w-[21.5rem] xl:h-172 lg:w-76 lg:h-[43rem] md:w-[25rem] md:h-[36rem] w-80 h-[35rem] lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 md:pt-16 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterBold text-black 5xl:text-4xl xxl:text-2xl md:text-2xl text-xl -mt-4">
                    *Popular*{" "}
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5.5xl xxl:text-4xl md:text-4.5xl text-3xl text-black pt-7">
                    Family Lunch
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-main-orange 5xl:pt-7 xxl:pt-5 xl:pt-14 pt-10">
                    60 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl md:text-2xl text-xl text-black pb-5 mt-2">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xl:text-4.5xl md:text-4.5xl text-3xl text-main-orange 5xl:pt-5">
                    25$/m
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
              {/* third  */}
              <div className="bg-white border-4 border-black 5xl:w-134 xxl:w-100 xxl:h-147 5xl:h-166 xl:w-[21.5rem] xl:h-156 lg:w-76 lg:h-[37.5rem] md:w-[25rem] md:h-[34rem] w-80 h-134 lg:mt-0 mt-5 rounded-[2.125rem] 5xl:px-13 xxl:px-10 xl:px-8 lg:px-5 px-10 md:pt-15 pt-24 pb-14 flex flex-col justify-between items-center">
                {/* texts */}
                <div className="mb-10">
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4xl md:text-4.5xl text-3xl text-black">
                    Cinema Ticket
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl md:text-2xl text-xl text-main-orange pt-7">
                    24 content / month
                  </p>
                  <p className="font-InterBold 5xl:text-3xl xxl:text-2xl xl:text-2xl md:text-2xl text-xl pb-5 text-black mt-2">
                    Unlimited IG accounts <br /> Unlimited admins <br />{" "}
                    Unlimited role access
                  </p>
                  <p className="font-InterExtraBold 5xl:text-5xl xxl:text-4xl xl:text-4.5xl md:text-4.5xl text-3xl text-main-orange 5xl:pt-5">
                    7$/m
                  </p>
                </div>
                {/* cta button  */}
                <button className="font-InterExtraBold 5xl:text-3xl xxl:text-2xl text-2xl 5xl:px-12 xxl:px-10 px-8 5xl:py-6 xxl:py-5 py-4 bg-black text-white rounded-full hover:scale-95 duration-300 transition ease-out">
                  Order now
                </button>
              </div>
            </div>
          )}
        </section>
        <div className="bg-white 5xl:h-156 xxl:h-[25rem] 1.5xl:h-[34rem] xl:h-[20rem] lg:h-[18rem] md:h-[15rem] h-[10rem] relative">
          <div className="absolute 5xl:w-[986px] 5xl:h-[579px] xxl:w-[900px] xxl:h-[500px] 1.5xl:w-[40rem] xl:w-[700px] xl:h-[420px] lg:w-[600px] lg:h-[360px] md:w-92 md:h-60 w-82 h-50 right-0 -bottom-4 1.5xl:-bottom-20 md:-bottom-5 xl:-bottom-7 xxl:-bottom-9 5xl:-bottom-11">
            <Image alt="vector" fill src="/asset/images/vector.svg" />
          </div>
        </div>
        {/* /* --------------------------------- footer ---------------------------------  */}
        <Footer />
      </main>
    </>
  );
}
