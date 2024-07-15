
import React from "react";
import { Nav } from "./Nav";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="">
      <div className="sm:container lg:container   xs:px-4 sm:px-8 lg:px-6 xl:px-0  relative  sm:mx-auto">
        <Nav />
        <div
          style={{ backgroundImage: 'url("/bg.jpeg")' }}
          className="xs:py-14 2xl:py-24  md:px-4 flex xs:gap-6  sm:justify-between sm:gap-0 xs:flex-col sm:flex-row
"
        >
          <div>
            <div>
              <h1 className="font-Red_Hat_Display font-[600] leading-tight xs:text-[34px] sm:text-[34px] lg:text-[50px] 2xl:text-[60px]  text-black">
                Stand Out with a<br /> Professional{" "}
                <span className="text-gradient font-Red_Hat_Display font-[700]">Resume</span>
              </h1>
              <p className="font-[300] font-Poppins xs:mt-6 2xl:mt-10 sm:text-[16px] xl:text-[18px] xs:text-[14px]">
                Upload your resume and let our advanced tools enhance it for
                you.
                <br />
                Tailor your resume to fit your dream job effortlessly.
              </p>
            </div>

            <div className="lg:py-6 lg:px-16 xs:py-4 xs:px-10 shadow-2xl rounded-[10px] flex flex-col xs:gap-4 sm:gap-6 items-center xs:mt-6 sm:mt-16 2xl:mt-14 ">
              <p className="text-center xs:text-[12px] lg:text-[16px]">
                Drag and drop your resume here or select a file
                <br /> (PDF & DOCX only). Max file size: 2MB.
              </p>
              <button className="sm:px-[40px] rounded-lg sm:w-[30vw] lg:w-[15vw] xs:w-[45vw] font-Red_Hat_Display font-[700]  sm:py-[14px] xs:px-[20px] xs:py-[6px] lg:text-[16px] xs:text-[12px] text-white  bg-custom-gradient">
                Upload a Resume
              </button>
              <div className="flex gap-2 items-centers">
                <Image
                  src={"/lock.svg"}
                  width={100}
                  height={100}
                  className="sm:w-[20px] xs:w-[15px]"
                />
                <p className="font-Red_Hat_Display text-[#999999] sm:text-[16px] xs:text-[12px]">
                  Privacy guaranteed
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-[10px] sm:h-[50vh] md:h-[40vh] xl:h-auto">
            <Image
              src={"/resumepic.png"}
              width={558}
              height={180}
              className="2xl:w-[700px] sm:w-[300px] md:w-[400px] shadow-xl rounded-lg xl:w-[588px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
