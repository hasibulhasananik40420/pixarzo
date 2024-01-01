import CommonAction from "@/components/shared/CommonAction";

const Contactpage = () => {
  return (
    <section>
      <CommonAction title={"Contact Us"} subTitle={"Home | contact us"} />

      <div className="my-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1320px] mx-auto px-3">

          {/***************** contact card 1 start here *******************/}
          <div className="lg:w-[360px] w-full h-[260px] flex flex-col justify-center items-center bg-[#F7F8FA] rounded-lg hover:bg-secondaryColor duration-500 group">
            <div className="w-20 h-20 rounded-full bg-PrimaryColor"></div>

            <h3 className="text-PrimaryColor text-[24px] font-bold leading-8 mt-3 group-hover:text-white">
              Location
            </h3>
            <h4 className="text-PrimaryColor text-[20px] font-bold leading-8 mt-4 group-hover:text-white">
              168/170, Ave 01,Old York Drive
            </h4>

            <p className="text-[#69778C] text-[18px] font-normal leading-8 mt-2 group-hover:text-white">
              Dhaka, Bangladesh
            </p>
          </div>


 {/***************** contact card 2 start here *******************/}
          <div className="lg:w-[360px] w-full h-[260px] flex flex-col justify-center items-center bg-[#F7F8FA] rounded-lg hover:bg-secondaryColor duration-500 group">
            <div className="w-20 h-20 rounded-full bg-PrimaryColor"></div>

            <h3 className="text-PrimaryColor text-[24px] font-bold leading-8 mt-3 group-hover:text-white">
            Phone
            </h3>
            <h4 className="text-PrimaryColor text-[20px] font-bold leading-8 mt-4 group-hover:text-white">
            +880171-770000
            </h4>

            <p className="text-[#69778C] text-[18px] font-normal leading-8 mt-2 group-hover:text-white">
            +8801761111456
            </p>
          </div>


 {/***************** contact card 3 start here *******************/}
          <div className="lg:w-[360px] w-full h-[260px] flex flex-col justify-center items-center bg-[#F7F8FA] rounded-lg hover:bg-secondaryColor duration-500 group">
            <div className="w-20 h-20 rounded-full bg-PrimaryColor"></div>

            <h3 className="text-PrimaryColor text-[24px] font-bold leading-8 mt-3 group-hover:text-white">
            Email
            </h3>
            <h4 className="text-PrimaryColor text-[20px] font-bold leading-8 mt-4 group-hover:text-white">
            support@example.com
            </h4>

            <p className="text-[#69778C] text-[18px] font-normal leading-8 mt-2 group-hover:text-white">
            info@example.com
            </p>
          </div>




        </div>

        {/**************************** new contact from section start here ********************/}

        <div className="max-w-screen-lg mx-auto mt-[96px]">
          <h1 className="lg:text-[40px] lg:leading-[56px] lg:w-[708px] w-full mx-auto md:text-4xl text-3xl text-PrimaryColor font-bold  text-center ">
            Questions or Comments?
          </h1>
          <h1 className="lg:text-[40px] lg:leading-[56px] lg:w-[708px] w-full mx-auto md:text-4xl text-3xl text-PrimaryColor font-bold text-center pt-1 ">
            {" "}
            Get in Touch
          </h1>

          <form className="w-full lg:pt-[56px] 2xl:pt-[56px] md:pt-[56px] pt-[56px] p-4 md:p-4 lg:p-0 2xl:p-0">
            <div className="lg:flex lg:gap-6  gap-y-14">
              <div className="w-full transform border-b-[1px] border-b-PrimaryColor bg-transparent text-[#69778C] text-[16px] duration-300 focus-within:border-ButtonColor">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border-none bg-transparent outline-none placeholder focus:outline-none pb-6"
                />
              </div>

              <div className="w-full transform border-b-[1px] border-b-PrimaryColor bg-transparent text-[#69778C] lg:pt-0 md:pt-8 pt-8 text-[16px] duration-300 focus-within:border-ButtonColor">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-full border-none bg-transparent outline-none placeholder focus:outline-none pb-6"
                />
              </div>
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#69778C] text-[16px] duration-300 focus-within:border-ButtonColor">
              <input
                type="text"
                placeholder="Write your message"
                className="w-full border-none bg-transparent outline-none placeholder focus:outline-none pb-20"
              />
            </div>

            <div className="flex justify-center pt-[56px]">
              <button className=" relative bg-ButtonColor w-[196px] h-[56px] rounded-[37px] text-white text-[18px] font-semibold leading-6 tracking-[ 0.9px] mt-10 duration-300 ease-in-out">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
