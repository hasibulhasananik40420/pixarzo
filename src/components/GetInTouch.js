
import contact from "@/assets/GetInTouch/contact us image.png";
import GetInTouchIcon from "@/assets/GetInTouch/GetInTouch.png";
import group from "@/assets/GetInTouch/Group 2.png";
import Image from "next/image";
import FadeIn from "./FadeIn";
import buttonhover from '@/styles/buttonhover.module.css'


const GetInTouch = () => {
  return (
    // GetInTouch section start here

    <section className="bg-PrimaryColor mt-[96px]">
      <FadeIn>
      <div className="max-w-[1320px] mx-auto px-3 pt-20 pb-20 md:pb-20 lg:pb-0 lg:flex gap-[93px]">
        
         {/************* text part start here *******************/}
        <div>
          <Image src={GetInTouchIcon} alt="" height={40} width={40} />

          <p className="text-white text-[16px] font-bold uppercase leading-6 mt-4">
            Get in Touch
          </p>
          <h1 className="text-white text-[40px] font-bold leading-[56px] mt-4 lg:w-[573px] w-full">
            Need help on a project? Get in touch today!
          </h1>

          <p className="text-[#CAD4EC] text-[16px] font-medium leading-[30px] mt-6 lg:w-[573px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat
            potenti laoreet risus egestas et lorem leo dui.
          </p>


            <button
                className={` ${buttonhover.bbtl} bg-secondaryColor w-[196px] h-[56px] text-white text-[18px] font-semibold leading-6 tracking-[ 0.9px] mt-12`}
              >
               Contact us
              </button>

          <Image
            className="mt-[39px] w-[271px] h-[271px]"
            src={group}
            alt=""
            height={271}
            width={271}
          />
        </div>
        {/************* text part end here *******************/}

       
        {/************* image part start here *******************/}

         <div className="lg:w-[652px] w-full mt-16 md:mt-16 lg:mt-0">
         <Image
            className="w-full h-full object-cover"
            src={contact}
            alt=""
            height={632}
            width={652}
            layout="responsive"
            placeholder="blur"
          />
         </div>
          {/************* image part end here *******************/}

      </div>
      </FadeIn>
    </section>
        // GetInTouch section end here

  );
};

export default GetInTouch;
