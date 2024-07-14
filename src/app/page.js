import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <div className="bg-custom-gradient text-white p-4 rounded-lg mb-4 font-Neuropal">
        This is a div with a custom gradient background using Neuropal font.
      </div>
      <h1 className="text-gradient bg-custom-gradient font-ClashDisplay text-4xl">
        ClashDisplay font.
      </h1>
    </div>
  );
}
