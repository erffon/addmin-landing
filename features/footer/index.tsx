import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-52 px-40">
      <div className="flex justify-between items-start pb-48">
        <div>
          <h3 className="font-InterExtraBold text-7.5xl">
            Trust everyone with{" "}
            <span className="text-main-orange">#addmin</span>
          </h3>
          <div className="flex gap-15 text-8xl mt-11">
            <RxTwitterLogo className="hover:scale-110 transition duration-300 ease-out" />
            <RxInstagramLogo className="hover:scale-110 transition duration-300 ease-out" />
          </div>
        </div>
        <div>
          <div className="relative w-104 h-32 mt-7 hover:scale-95 duration-300 ease-out transition">
            <Image fill src="/assets/images/pwa-cta.svg" alt="pwa cta" />
          </div>
          <div className="relative w-104 h-32 mt-7 hover:scale-95 duration-300 ease-out transition">
            <Image fill src="/assets/images/appstore-cta.svg" alt="pwa cta" />
          </div>
          <div className="relative w-104 h-32 mt-7 hover:scale-95 duration-300 ease-out transition">
            <Image fill src="/assets/images/googleplay-cta.svg" alt="pwa cta" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
