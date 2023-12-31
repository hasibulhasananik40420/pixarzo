"use client";
import teamIcon from "@/assets/Our-team/teamIcon.png";
import Image from "next/image";
import OurTeamCard from "./OurTeamCard";
import FadeIn from "./FadeIn";

const OurTeam = () => {
  return (
    // our team section start here

    <section className="bg-PrimaryColor px-3 py-[96px]">
      <div className="max-w-[1320px] mx-auto">
          {/*********** our team title start here ***********/}
        <div>
        <FadeIn>
          <Image src={teamIcon} alt="" width={40} height={40} />

          <h1 className="text-white text-[40px] font-bold leading-[56px] tracking-[0.5px]">
            Our Team
          </h1>

          <p className="text-white text-[24px] font-normal leading-8 lg:w-[917px] w-full mt-6">
            Our extraordinary team works with various creative and complex
            things together and builds stunning products
          </p>
          </FadeIn>
        </div>


        {/*********** our team card start here ***********/}
        <div className="mt-[48px]">
          <OurTeamCard />
        </div>
          {/*********** our team card end here ***********/}


      </div>
    </section>
     // our team section end here
  );
};

export default OurTeam;
