import Header from "@/features/header";
import style from "./Home.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState({ id: 0, state: false });
  const [itemSize, setItemSize] = useState(3);
  const questionsItems = FAQ.data.map((item, idx) => {
    const onClick = () => {
      setShow(prev => {
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
    <>
      <Header />
      <main className="pt-62">
        {/* /* ------------------------------ Hero Section ------------------------------  */}
        <div className="px-22 flex justify-between">
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
        </div>
        {/* /* ------------------------------- 2nd section ------------------------------  */}
        <div className="mt-90 px-36 pb-92">
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
                sequence={["Life", 1000, "Lifeee", 1000, "Lifeeeeee", 1000]}
                repeat={Infinity}
                style={{ color: "#FF782C" }}
              />
            </p>
          </div>
        </div>
        {/* /* ------------------------------- 3rd section ------------------------------  */}
        <div className="bg-white pt-48 pb-56">
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
                    checked
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
        </div>
        {/* /* ------------------------------- 4th section ------------------------------  */}
        <div className="pt-64 px-35">
          <p className="font-InterExtraBold text-7.5xl text-main-orange">
            The Questions
          </p>
          <p className="font-InterExtraBold text-7.5xl mb-66">You may Asking</p>
        </div>
      </main>
    </>
  );
}
