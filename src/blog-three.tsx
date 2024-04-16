import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogThree = () => {
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
          src="https://th.bing.com/th/id/OIP.WOYd9Fcl0tOvAUYd9FSLWQHaFB?rs=1&pid=ImgDetMain"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-9 items-center justify-center h-full w-full">
          <h4 className="text-sm leading-[14px] font-medium text-white bg-red-400 hover:bg-red-600 cursor-pointer transition-colors rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
            News
          </h4>
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-full sm:w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px] text-white">
          The Future of Cloud Computing: Leveraging Cloud Solutions for Business Success
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-[66px] justify-between">
          <div className="flex flex-col items-start gap-[10px] md:pt-[78px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white py-[9px] px-[17px] rounded-md font-semibold text-[14px] leading-[14px]">
              Privacy
            </h3>
            <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full sm:w-[530px] md:w-[382px] leading-[45px] text-[#010910]">
            Leveraging Cloud Solutions for Business Success
            </h2>
            <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full md:w-[382px]">
            Cloud computing has revolutionized the way businesses operate, offering unprecedented scalability, flexibility, and cost-efficiency. At Counterflow Technologies Limited, we believe that cloud solutions are the future of IT infrastructure, enabling businesses to innovate faster, scale more efficiently, and stay competitive in a rapidly evolving digital landscape. In this blog post, we'll explore the benefits of cloud computing and how businesses can leverage cloud solutions for success.
            </p>
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.WOYd9Fcl0tOvAUYd9FSLWQHaFB?rs=1&pid=ImgDetMain"
            alt=""
            className="w-full md:w-[500px] object-cover border-[18px] md:border-[25px] rounded-3xl"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
          Cloud Migration Strategies
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
          Migrating to the cloud can be a complex process that requires careful planning and execution. At Counterflow Technologies Limited, we help businesses navigate the cloud migration journey, from assessment and planning to migration and post-migration optimization. Whether you're migrating legacy applications or building cloud-native solutions, our team of cloud experts is here to guide you every step of the way.
          </p>
        </div>


        <Link
          to="/blog/one"
          className="w-full sm:w-[660px] h-[334px] md:w-full md:h-[396px] relative rounded-2xl cursor-pointer group mt-20"
        >
          <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

          <img
            src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-max max-h-max mx-auto my-auto z-20 text-white flex flex-col gap-4 items-center justify-center px-5 sm:px-1">
            <h4 className="text-lg leading-[14px] font-medium text-white px-[14px] py-[7px] flex items-center justify-center gap-3">
              Next post
            </h4>

            <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-full sm:w-[550px] md:w-[600px] leading-snug md:leading-snug text-center text-white">
            Demystifying DevOps: Streamlining IT Operations for Efficiency        </h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default BlogThree;
