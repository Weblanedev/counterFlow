import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogOne = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="relative border h-[300px] md:h-[550px]">
        <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

        <img
          src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-9 items-center justify-center h-full w-full">
          <h4 className="text-sm leading-[14px] font-medium text-white bg-red-400 hover:bg-red-600 cursor-pointer transition-colors rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
            News
          </h4>
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-full sm:w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px] text-white">
          Demystifying DevOps: Streamlining IT Operations for Efficiency
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-[66px] justify-between">
          <div className="flex flex-col items-start gap-[10px] md:pt-[78px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white py-[9px] px-[17px] rounded-md font-semibold text-[14px] leading-[14px]">
            DevOps
            </h3>
            <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full sm:w-[530px] md:w-[382px] leading-[45px] text-[#010910]">
            Demystifying DevOps
            </h2>
            <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full md:w-[382px]">
            In today's rapidly evolving digital landscape, businesses are under increasing pressure to deliver software faster, more reliably, and with higher quality. This has led to the widespread adoption of DevOps practices, which aim to bridge the gap between development and operations teams to streamline IT operations and accelerate software delivery.
            </p>
          </div>

          <img
            src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
            alt=""
            className="w-full md:w-[500px] object-cover border-[18px] md:border-[25px] rounded-3xl"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
          DevOps Tools and Technologies
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
          DevOps has emerged as a game-changer for organizations looking to streamline their IT operations and accelerate software delivery. By embracing DevOps practices and leveraging the right tools and technologies, businesses can achieve greater efficiency, reliability, and agility in their software development processes.


          </p>
        </div>

      

        <Link
          to="/blog/two"
          className="w-full sm:w-[660px] h-[334px] md:w-full md:h-[396px] relative rounded-2xl cursor-pointer group mt-20"
        >
          <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

          <img
            src="https://static.vecteezy.com/system/resources/previews/006/946/284/original/a-logo-image-of-a-shield-with-a-lock-in-the-middle-of-it-symbolizing-protection-and-security-for-digital-or-technology-related-company-icon-free-vector.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-max max-h-max mx-auto my-auto z-20 text-white flex flex-col gap-4 items-center justify-center px-5 sm:px-1">
            <h4 className="text-lg leading-[14px] font-medium text-white px-[14px] py-[7px] flex items-center justify-center gap-3">
              Next post
            </h4>

            <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-full sm:w-[550px] md:w-[600px] leading-snug md:leading-snug text-center text-white">
            Cybersecurity Best Practices: Protecting Your Business in a Digital Age
            </h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default BlogOne;
