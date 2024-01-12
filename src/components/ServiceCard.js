/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import ux from "@/assets/Services/ux.png";
import GraphicDesign from "@/assets/Services/graphic-designer.png";
import Branding from "@/assets/Services/logo-design 1.png";
import WebsiteDesign from "@/assets/Services/web-design.png";
import FadeIn, { FadeInStagger } from "./FadeIn";
import hovercard from '@/styles/hovercard.module.css'
const ServiceCard = () => {
  
  return (
    <FadeInStagger faster>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mt-16 md:mt-16 lg:mt-0 xl:mt-0">
        {/************ service card 1 start here ************/}
        <FadeIn>
          <div className={`${hovercard.card}  bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full group`}>
            <div className="p-6">
              <Image src={ux} alt="" width={72} height={72} />
              <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px] group-hover:text-white">
                UI/UX Design
              </h1>

              <p className="text-[#444] text-[16px] font-normal leading-7 mt-[20px] group-hover:text-white">
                UI & UX Consulting is a holistic approach to enhancing the
                users' experience based on business objectives, users'
                perspective.
              </p>
            </div>
          </div>
        </FadeIn>

        {/************ service card 2 start here ************/}
        <FadeIn>
          <div className={`${hovercard.card}  bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full group`}>
            <div className="p-6">
              <Image src={GraphicDesign} alt="" width={72} height={72} />
              <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px] group-hover:text-white">
                Graphic Design
              </h1>

              <p className="text-[#444] text-[16px] font-normal leading-7 mt-[20px] group-hover:text-white">
                UI & UX Create the visual versions of brands, messages and
                communications. They help people and businesses get their
                messages.
              </p>
            </div>
          </div>
        </FadeIn>

        {/************ service card 3 start here ************/}
        <FadeIn>
          <div className={`${hovercard.card}  bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full group`}>
            <div className="p-6">
              <Image src={Branding} alt="" width={72} height={72} />
              <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px] group-hover:text-white">
                Branding
              </h1>

              <p className="text-[#444] text-[16px] font-normal leading-7 mt-[20px] group-hover:text-white">
                Brand identity design refers to the creation of all the elements
                that will help to create a recognizable brand image.
              </p>
            </div>
          </div>
        </FadeIn>

        {/************ service card 4 start here ************/}
        <FadeIn>
          <div className={`${hovercard.card}  bg-[#F7F8FA] rounded-lg xl:w-[424px] lg:w-[380px] w-full group`}>
            <div className="p-6">
              <Image src={WebsiteDesign} alt="" width={72} height={72} />
              <h1 className="mt-[48px] text-[#28264D] text-[28px] font-bold leading-[40px] group-hover:text-white">
                Website Design
              </h1>

              <p className="text-[#444] text-[16px] font-normal leading-7 mt-[20px] group-hover:text-white">
                UI & UX A web design service provides you with a customized
                website design that's perfect for your business or personal
                site.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeInStagger>
  );
};

export default ServiceCard;
