/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import headerImage from "@/assets/Header/header.png";
import FadeIn from "./FadeIn";
import buttonhover from "@/styles/buttonhover.module.css";

const Header = () => {
  return (
    // header section start here

    <section className="bg-PrimaryColor px-3 py-[52px]">
      <div className="lg:flex items-center gap-[61px] max-w-[1360px] mx-auto mt-16 md:mt-20 lg:mt-0 2xl:mt-0">
        {/************* header text part start here *************/}
        <FadeIn>
          <div className="lg:w-[648px] w-full">
            <h1 className="text-white lg:text-[67px] md:text-[77px] md:leading-[110px] text-[46px] leading-[70px] font-bold lg:leading-[82px]">
              We're an <span className="text-[#47BDFF]">Creative</span> Digital
              Agency
            </h1>
            <p className="text-white text-[24px] font-medium leading-[36px] mt-6">
              We believe we help you grow your business to the next level with a
              better experience
            </p>

            <div className="flex gap-4 mt-[48px]">
              <button
                className={` ${buttonhover.bbtl} bg-secondaryColor text-white w-[169px] h-[56px] leading-6 tracking-[ 0.09px] text-[18px] font-bold`}
              >
                Get Started
              </button>

              <button className="bg-[#333156] w-[163px] h-[56px] rounded-[37px] text-white text-[18px] font-bold leading-6 tracking-[0.09px] hover:bg-[#47BDFF]  duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </FadeIn>

        {/************* image part start here *************/}
        <div className="xl:w-[650px] lg:w-[550px] lg:h-[500px] xl:h-[600px] h-full">
          <FadeIn>
         
           <Image
              className="mt-16 md:mt-16 lg:mt-0 w-full"
              src={headerImage}
              alt=""
              placeholder="blur"
            />
         
          </FadeIn>
        </div>
      </div>
    </section>
    // header section end here
  );
};

export default Header;
