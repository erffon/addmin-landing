import Header from "@/features/header";
import style from "./Home.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
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
        <div className="bg-white pt-48">
          <p className="font-InterExtraBold text-7.5xl text-black text-center mb-58">
            Easily manage as a{" "}
            <span className="font-InterExtraBold text-7.5xl text-main-orange">
              Toggle!
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
