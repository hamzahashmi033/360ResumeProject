import React from "react";

export const Nav = () => {
  return (
    <div className="flex items-center justify-between pt-4">
      <div>
        <p className="text-Blue leading-[36px] font-[700] font-Poppins xs:text-[18px] sm:text-[24px]">
          Resume Checker
        </p>
      </div>
      <div className="xs:hidden lg:block">
        <ul className="flex gap-10 font-[500] font-Poppins  ">
          <li className="hover:text-Blue cursor-pointer">Home</li>
          <li className="hover:text-Blue cursor-pointer">How It Works</li>
          <li className="hover:text-Blue cursor-pointer">Features</li>
          <li className="hover:text-Blue cursor-pointer">FAQs</li>
        </ul>
      </div>
      <div className="flex gap-2 font-[700] font-Poppins">
        <button className="sm:px-[40px] sm:py-[14px] xs:px-[20px] xs:py-[6px] text-Blue sm:text-[16px] xs:text-[12px]   border border-Blue">
          Sign in
        </button>
        <button className="sm:px-[40px] sm:py-[14px] xs:px-[20px] xs:py-[6px] sm:text-[16px] xs:text-[12px] text-white  bg-custom-gradient">
          Login
        </button>
      </div>
    </div>
  );
};
