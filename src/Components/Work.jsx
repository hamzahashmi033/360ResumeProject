import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="mt-24">
      <div className="sm:container lg:container   xs:px-4 sm:px-8 lg:px-4 xl:px-0  py-8 relative  sm:mx-auto">
        <div className="sm:mx-28  flex flex-col items-center ">
          <div>
            <h2
              style={{
                borderBottom: "2px solid",
                borderBottomColor: "transparent",
                borderImage: "linear-gradient(to right, #3b82f6, #10b981)",
                borderImageSlice: "1",
              }}
              className="font-Red_Hat_Display leading-loose text-[30px]">How It Works</h2>
            {/* <Image src={"/line.png"} width={150} height={100} /> */}
          </div>
          <div className="flex gap-16 py-12 sm:flex-row  items-center mt-20">
            <div>
              <Image src={"/work1.svg"} width={300} height={200} />
            </div>
            <div>
              <p className="font-Poppins font-[400] text-[#252525] mb-2 ">
                Step 01
              </p>
              <h3 className="font-Poppins font-[500] sm:text-[32px] xs:text-[18px] text-Blue mb-4">
                Upload Your Resume
              </h3>
              <p className="font-Poppins font-[300] sm:text-[20px] xs:text-[14px] text-[#000000]">
                Easily drag and drop your resume into our upload box
                <br className="sm:block xs:hidden lg:hidden xl:block" /> or
                select a file from your computer. We accept PDF and
                <br className="sm:block xs:hidden lg:hidden xl:block" />
                DOCX formats with a maximum file size of 2MB.
              </p>
            </div>
          </div>
          <div className="flex gap-16 py-12 flex-row-reverse items-center mt-20">
            <div>
              <Image
                src={"/work2.svg"}
                width={300}
                height={200}
                className="xs:w-[700px] sm:w-[300px] md:w-[400px]"
              />
            </div>
            <div>
              <img
                src="/arrow.png"
                width={100}
              // className="xs:w-[700px] sm:w-[300px]"
              />
            </div>
            <div>
              <p className="font-Poppins font-[400] text-[#252525] mb-2 ">
                Step 02
              </p>
              <h3 className="font-Poppins font-[500] sm:text-[32px] xs:text-[18px] text-Blue mb-4">
                Automatic Analysis
              </h3>
              <p className="font-Poppins font-[300] sm:text-[20px] xs:text-[14px] text-[#000000]">
                Our advanced AI-powered system analyzes your
                <br className="sm:block xs:hidden" /> resume instantly. We
                review your content for key
                <br className="sm:block xs:hidden" /> elements such as
                formatting, structure, keyword
                <br className="sm:block xs:hidden" />
                optimization, grammar, and spelling.
              </p>
            </div>
          </div>
          <div className="flex gap-16  py-12 items-center mt-20">
            <div>
              <Image
                src={"/work3.svg"}
                width={300}
                height={200}
                className="xs:w-[1500px] sm:w-[1000px] md:w-[400px] xl:w-[300px]"
              />
            </div>
            <div>
              <p className="font-Poppins font-[400] text-[#252525] mb-2 ">
                Step 03
              </p>
              <h3 className="font-Poppins font-[500] sm:text-[32px] xs:text-[18px] text-Blue mb-4">
                Detailed Feedback
              </h3>
              <p className="font-Poppins font-[300] sm:text-[20px] xs:text-[14px] text-[#000000]">
                Receive a detailed feedback report with actionable
                <br className="sm:block xs:hidden" /> insights on formatting and
                design to ensure visual
                <br className="sm:block xs:hidden" /> appeal and adherence to
                industry standards, content
                <br className="sm:block xs:hidden" />
                quality for clarity, conciseness, and relevance, keyword
                <br className="sm:block xs:hidden" />
                optimization for ATS compatibility, identification and
                <br className="xs:hidden lg:hidden xl:block" />
                correction of grammar and spelling errors, and
                <br className="xs:hidden lg:hidden xl:block" /> evaluation of
                the overall impression your resume makes
                <br className="xs:hidden lg:hidden xl:block" /> on potential
                employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;