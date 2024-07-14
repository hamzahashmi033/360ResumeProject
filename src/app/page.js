import React from "react";
import Image from "next/image";
import { Hero } from "@/Components/Hero";
import Faqs from "@/Components/Faqs";
import Footer from "@/Components/Footer";
import Work from "@/Components/Work";
import Score from "@/Components/Score";
import "@/app/globals.css"

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <Score />
      <div className="py-12 pb-12 relative overflow-hidden">
        {/* Background with gradient and blur effect */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #D5C664, #66B1D9)",
            borderRadius: "469.104px", // Adjusted border-radius
            filter: "blur(200.78744506835938px)", // Applied blur filter
          }}
        ></div>
        {/* White overlay */}
        <div className="absolute inset-0 bg-white opacity-60"></div>
        {/* FAQ section */}
        <h2 className="text-2xl w-[120px] mx-auto leading-loose font-bold font-Poppins text-center mb-8 relative z-10"
          style={{
            borderBottom: "2px solid",
            borderBottomColor: "transparent",
            borderImage: "linear-gradient(to right, #3b82f6, #10b981)",
            borderImageSlice: "1",
          }}
        >
          FAQS
        </h2>
        <Faqs />
      </div>
      <Footer />
    </div>

  );
}
