import { Link } from "react-router-dom";
import donate from "./assets/donate.jpg";

const Footer = () => {
  return (
    <div className="w-full border-t border-orange-900/10 bg-red-800 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
        <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[850px]">
        Experience the transformative power of innovation and seamless solutions with dynamics. Our journey doesn't end with the delivery of a solution.
        </h3>

        <Link
          to="/products"
          className="text-base font-medium text-orange-950 bg-white rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-gray-200 flex items-center justify-center gap-3 max-w-max"
        >
          Explore Products
        </Link>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/products"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Products
        </Link>
        <Link
          to="/contact-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Terms & Privacy
        </Link>
      </div>

      <p className="text-[12px] leading-[24px] text-center text-orange-100/50">
        ©CounterFlow Technologies Limited. All Rights Reserved
      </p>

      <Link
            to="/donation"
             className="text-white text-xl flex gap-[20px]">
        Donate to help build our hub <img src={donate} className="w-32"></img>
      </Link>
    </div>
  );
};

export default Footer;
