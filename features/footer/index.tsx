import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="xxl:pt-52 xl:pt-42 lg:pt-32 md:pt-24 pt-20 5xl:px-40 lg:px-22 md:px-10 px-5 pb-22 relative">
      <span className="w-full h-32 bg-black z-10 -top-1 right-0 absolute"></span>
      <div className="md:flex block justify-between items-start xl:pb-48 lg:pb-25 md:pb-25 pb-16">
        <div>
          <h3 className="font-InterExtraBold 5xl:text-7.5xl xxl:text-7xl xl:text-6xl lg:text-5xl md:text-4.5xl 3xs:text-4xl text-3xl w-4/5 md:w-2/3 md:mx-0 mx-auto text-center md:text-left">
            Trust everyone with{" "}
            <span className="text-main-orange">#addmin</span>
          </h3>
          <div className="flex 5xl:gap-15 xl:gap-10 lg:gap-7 md:gap-5 gap-6 xxl:text-8xl xl:text-7.5xl lg:text-6xl md:text-5.5xl text-5xl lg:mt-11 mt-6 md:w-auto w-full md:justify-start justify-center">
            <a href="https://twitter.com/addmin_social">
              <RxTwitterLogo className="hover:scale-110 transition duration-300 ease-out" />
            </a>
            <a href="https://www.instagram.com/addmin_social/">
              <RxInstagramLogo className="hover:scale-110 transition duration-300 ease-out" />
            </a>
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------- */}
        <div>
          <div className="relative 5xl:w-104 xxl:w-96 xl:w-84 xxl:h-32 xl:h-24 lg:w-64 lg:h-20 md:w-50 md:h-14 w-full h-17 xxl:mt-7 md:mt-0 mt-15 mx-auto grayscale cursor-not-allowed">
            <Image fill src="/asset/images/pwa-cta.svg" alt="pwa cta" />
          </div>
          <div className="relative 5xl:w-104 xxl:w-96 xxl:h-32 xl:w-84 xl:h-24 lg:w-64 lg:h-20 md:w-50 md:h-14 w-56 h-17 xxl:mt-7 mt-5 hover:scale-95 duration-300 ease-out transition mx-auto">
            <a href="/soon">
              <Image fill src="/asset/images/appstore2.png" alt="pwa cta" />
            </a>
          </div>
          <div className="relative 5xl:w-104 xxl:w-96 xxl:h-32 xl:w-84 xl:h-24 lg:w-64 lg:h-20 md:w-50 md:h-14 w-full h-17 xxl:mt-7 mt-5 hover:scale-95 duration-300 ease-out transition mx-auto">
            <a href="/soon">
              <Image
                fill
                src="/asset/images/googleplay-cta.svg"
                alt="pwa cta"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex-col flex md:gap-10 gap-3 text-center md:text-left xxl:text-2xl lg:text-xl md:text-base">
        <p className="font-InterBold">Copyright ©2023 addmin</p>
        <a
          href=""
          className="text-main-orange font-InterBold underline hover:scale-95 transition duration-300 ease-out"
        >
          Privacy
        </a>
        <a
          href=""
          className="text-main-orange font-InterBold underline hover:scale-95 transition duration-300 ease-out"
        >
          Terms
        </a>
        <a
          href=""
          className="text-main-orange font-InterBold underline hover:scale-95 transition duration-300 ease-out"
        >
          Security
        </a>
      </div>
    </footer>
  );
};

export default Footer;
