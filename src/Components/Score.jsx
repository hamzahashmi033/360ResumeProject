import Image from "next/image";
import React from "react";

const Score = () => {
  return (
    <div

    //   className="h-[1000px]"
    >
      <div
        style={{
          background:
            "linear-gradient(97.5deg, rgba(59, 174, 235, 0.2) -7.64%, rgba(213, 198, 100, 0.2) 103.16%)",
        }}
        className="sm:container lg:container   xs:px-4 sm:px-8 lg:px-6 xl:px-0  relative  sm:mx-auto"
      >
        <div className="flex flex-col items-center py-8">
          <h2 className="font-Red_Hat_Display font-[600] xl:text-[60px] xs:text-[30px] text-[#000000] ">
            Get your resume score today!
          </h2>
          <p className="text-center">
            Upload your resume and receive a personalized
            <br /> email with an actionable task list.
          </p>
          <div className="lg:py-6 lg:px-16 xs:py-4 xs:px-10 shadow-2xl bg-white rounded-[10px] flex flex-col xs:gap-4 sm:gap-6 items-center xs:mt-6 sm:mt-16 2xl:mt-14 ">
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
      </div>
    </div>
  );
};

export default Score;