import { Link } from "react-router-dom";
import { Faqs } from "./utils";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [showFaq, setShowFaq] = useState<any>(false)
  const active = (index: any) => {
    if (showFaq === index) {
      return setShowFaq(null);
    }
    setShowFaq(index);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px] bg-orange-50/20">
      <section className="flex overflow-hidden relative flex-col-reverse md:flex-row h-[90vh] md:h-[85vh] px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 homepage">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start text-center">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center text-white">
            Seamless IT for your business, boosting your growth.
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[600px] text-white">
            We provide the expertise and support to propel your business forward
            in the digital landscape.
          </p>

          <Link
            to="/products"
            className="text-base font-medium text-white bg-red-400 rounded-md px-7 md:px-12 py-4  hover:bg-red-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link>
        </div>
      </section>

      <section className="py-[50px]  bg-red-400/30 "> 
        <div className='text-center'>
          <h1 className='recoletafont text-[32px] leading-[40px] sm:text-[40px] sm:leading-[68px] font-[600] mb-[8px] sm:mb-[0px] sm:mt-[4px] text-blue-1000'>Frequently asked questions</h1>
          <p className='manropefont text-[15px] leading-[24px] font-[400] text-gray-1000 w-full lg:w-[700px] m-auto'>
            We've answered some of your frequently asked questions with quick, easy and comprehensive responses here. For further questions, please contact us below.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-[32px] mt-[48px] manropefont'>
          {
            Faqs.map((faq) => {
              return (
                faq.id < 8 && <div className='flex flex-col px-[20px] box-shadow bg-white' key={faq.id} onClick={() => active(faq.id)}>
                  <div className='flex'>
                    <div className='cursor-pointer'>
                      <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                        <div className='w-[100%]'>
                          <h1 className='w-[100%] pr-[29px] sm:w-11/12 text-[16px] leading-[24px] lg:text-[20px] lg:leading-[40px] xl:text-[20px] xl:leading-[40px] font-[500] text-blue-1000'>{faq.question}</h1>
                        </div>
                        <div className=''>
                          <img
                            src="https://th.bing.com/th/id/OIP.qXJ83xgePfWqbwpCfltcSwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
                            alt="dropdown"
                            className={`${showFaq === faq.id ? 'rotate-0' : 'rotate-180'} w-4`}
                          />
                        </div>
                      </div>
                      {showFaq === faq.id &&
                        <div className='flex justify-center items-center w-[320px] sm:w-[510px] lg:w-[600px] xl:w-[810px] py-[16px]'>
                          <p className='text-[14px] leading-[22px] sm:text-[16px] sm:leading-[30px] font-[300] xl:sm:text-[18px] xl:leading-[30px] fadein popup'>{faq.answer}</p>
                        </div>}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>


    </div>
  );
};

export default Homepage;
