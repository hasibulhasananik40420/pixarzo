"use client";
import image1 from "@/assets/Our-team/image1.png";
import image2 from "@/assets/Our-team/image2.png";
import image3 from "@/assets/Our-team/image3.png";
import image4 from "@/assets/Our-team/image4.png";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const OurTeamCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-36 justify-items-center pb-[48px]">
        {/************ our team card 1 start here ***************/}
        <div className="lg:w-[300px] xl:w-[312px] w-full  relative">
          <Image
            className="object-contain w-full"
            src={image1}
            alt=""
            width={312}
            height={371}
           
          />
          <div
            className="h-[138px] bg-[#E4F5FF] mt-[-36px] absolute w-full p-6"
            style={{ borderRadius: "16px 0px 48px 0px" }}
          >
            <p className="text-[#28264D] text-[14px] font-normal leading-[18px] tracking-[0.5px]">
              CEO
            </p>
            <h3 className="text-[#28264D] text-[24px] font-semibold leading-8 tracking-[0.5px] mt-1">
              Alfredo Ottis
            </h3>

            <button className="flex items-center justify-center mt-3 gap-2 text-[#0084FE] text-[16px] font-bold leading-6 tracking-[0.5px] hover:text-[#FF338F] duration-300">
              <span>Read bio</span> <MdArrowForward />
            </button>
          </div>
        </div>

        {/************ our team card 2 start here ***************/}
        <div className="lg:w-[300px] xl:w-[312px] w-full relative">
          <Image
            className="object-contain w-full"
            src={image2}
            alt=""
            width={312}
            height={371}
            
          />
          <div
            className="h-[138px] bg-[#E4F5FF] mt-[-36px] absolute w-full p-6"
            style={{ borderRadius: "16px 0px 48px 0px" }}
          >
            <p className="text-[#28264D] text-[14px] font-normal leading-[18px] tracking-[0.5px]">
              Brand Designer
            </p>
            <h3 className="text-[#28264D] text-[24px] font-semibold leading-8 tracking-[0.5px] mt-1">
              Cameron Williamson
            </h3>

            <button className="flex items-center justify-center mt-3 gap-2 text-[#0084FE] text-[16px] font-bold leading-6 tracking-[0.5px] hover:text-[#FF338F] duration-300">
              <span>Read bio</span> <MdArrowForward />
            </button>
          </div>
        </div>

        {/************ our team card 3 start here ***************/}
        <div className="lg:w-[300px] xl:w-[312px] w-full relative">
          <Image
            className="object-contain w-full"
            src={image3}
            alt=""
            width={312}
            height={371}
            
          />
          <div
            className="h-[138px] bg-[#E4F5FF] mt-[-36px] absolute w-full p-6"
            style={{ borderRadius: "16px 0px 48px 0px" }}
          >
            <p className="text-[#28264D] text-[14px] font-normal leading-[18px] tracking-[0.5px]">
              Product Designer
            </p>
            <h3 className="text-[#28264D] text-[24px] font-semibold leading-8 tracking-[0.5px] mt-1">
              Dianne Russell
            </h3>

            <button className="flex items-center justify-center mt-3 gap-2 text-[#0084FE] text-[16px] font-bold leading-6 tracking-[0.5px] hover:text-[#FF338F] duration-300">
              <span>Read bio</span> <MdArrowForward />
            </button>
          </div>
        </div>

        {/************ our team card 4 start here ***************/}
        <div className="lg:w-[300px] xl:w-[312px] w-full relative">
          <Image
            className=" w-full "
            src={image4}
            alt=""
            width={312}
            height={371}
           
          />
          <div
            className="h-[138px] bg-[#E4F5FF] mt-[-36px] absolute w-full p-6"
            style={{ borderRadius: "16px 0px 48px 0px" }}
          >
            <p className="text-[#28264D] text-[14px] font-normal leading-[18px] tracking-[0.5px]">
              UX Designer
            </p>
            <h3 className="text-[#28264D] text-[24px] font-semibold leading-8 tracking-[0.5px] mt-1">
              Kathryn Murphy
            </h3>

            <button className="flex items-center justify-center mt-3 gap-2 text-[#0084FE] text-[16px] font-bold leading-6 tracking-[0.5px] hover:text-[#FF338F] duration-300">
              <span>Read bio</span> <MdArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
       
        <button className="group relative bg-ButtonColor w-[246px] h-[56px] rounded-[37px] text-white text-[18px] font-bold leading-6 tracking-[0.09px] overflow-hidden transition duration-300 ease-in-out mt-12">
              <span className="absolute inset-0 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center justify-center h-full">
              View Team Members
              </span>
            </button>
      </div>
    </div>
  );
};

export default OurTeamCard;
