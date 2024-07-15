import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
export default function Footer(params) {
    return (
        <footer className="bg-white py-8 flex flex-col items-center md:flex-row md:justify-between md:px-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-[#3BAEEB] text-2xl font-bold">Resume Checker</h2>
                <p className="text-gray-800 mt-4 max-w-xs mx-auto md:mx-0">
                    Upload your resume and let our advanced tools enhance it for you. Tailor your resume to fit your dream job effortlessly.
                </p>
            </div>

            <div>
                <nav className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
                    <a href="#home" className="text-black font-bold font-poppins hover:underline">Home</a>
                    <a href="#features" className="text-black font-bold font-poppins hover:underline">Features</a>
                    <a href="#how-it-works" className="text-black font-bold font-poppins hover:underline">How It Works</a>
                    <a href="#faqs" className="text-black font-bold font-poppins hover:underline">FAQs</a>
                </nav>
                <div className="flex xs:flex-col md:flex-row mt-4">

                    <div style={{
                        marginTop: "20px",
                        width: "300px",
                        height: "1px",
                        borderBottom: "2px solid",
                        borderBottomColor: "transparent",
                        borderImage: "linear-gradient(to right, #3b82f6, #10b981)",
                        borderImageSlice: "1",

                    }}></div>
                    <div className="flex gap-4 ml-2 mt-2 xs:justify-center">
                        <a href="#instagram" className="text-gray-700 hover:underline"><FaInstagram /></a>
                        <a href="#linkedin" className="text-gray-700 hover:underline"><FaLinkedinIn /></a>
                        <a href="#facebook" className="text-gray-700 hover:underline"><FaFacebookF /></a>
                        <a href="#twitter" className="text-gray-700 hover:underline"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            {/*  */}
        </footer >
    )
}