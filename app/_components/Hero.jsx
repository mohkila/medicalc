"use client";
import { Button } from "@/components/ui/button";
import { Hospital } from "lucide-react";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="container h-[80vh] mx-auto p-5 flex flex-col md:flex-row justify-between items-center mt-5">
      <div className="md:w-1/2 text-center md:text-left">
        {/* Typing animation */}
        <h3 className="text-primary font-bold text-lg mb-2">
          Leading the Way in Healthcare Excellence
        </h3>
        <h1 className="font-extrabold text-3xl md:text-5xl leading-tight mb-4">
          <Typewriter
            words={[
              "Leading the Way in Healthcare Excellence",
              "Your Health is Our Priority",
              "Innovating Healthcare Solutions",
            ]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
        <Button className="bttn m-3 p-5">Explore Services</Button>
      </div>
      <div className="md:w-1/2 w-[300px] flex justify-center md:justify-end mt-5 md:mt-0 relative">
        <Image
          src="/dr-2_OLD.png"
          alt="A healthcare professional"
          width={320}
          height={320}
          className="rounded-lg bgimg  "
        />
        <div className="w-[150px] h-[70px]   bg-secondary absolute bsttn"> </div>
        <div
          className="absolute top-1/4 left-2/4  
          flex gap-1 items-center bttn font-extrabold text-sm
          transform -translate-x-2/4 -translate-y-1/2 text-black bg-white rounded-lg shadow-lg"
        >
          <Hospital
            size={40}
            className="bg-primary rounded-2xl text-white text-3xl p-1 font-extrabold"
          />
          <div className="flex flex-col items-center">
            <h2>29</h2>
            <h2>Pharmacy</h2>
          </div>
        </div>
        <div
          className="absolute top-2/4 right-[-125px] 
          flex gap-1 items-center bttn font-extrabold text-sm
          transform -translate-x-1/4 -translate-y-1/2 text-black bg-white rounded-lg shadow-lg"
        >
          <MdLocalPharmacy
            size={40}
            className="bg-primary rounded-2xl text-white 
          text-3xl p-1 font-extrabold"
          />
          <div className="flex flex-col items-center">
            <h2>25</h2>
            <h2>Facility</h2>
          </div>
        </div>
        <div
          className="absolute top-3/4 left-2/4  
          flex gap-1 items-center bttn font-extrabold text-sm
          transform -translate-x-2/4 -translate-y-1/3 text-black bg-white rounded-lg shadow-lg"
        >
          <FaUserDoctor 
            size={40}
            className="bg-primary rounded-2xl text-white text-3xl p-1 font-extrabold"
          />
          <div className="flex flex-col items-center">
            <h2>2500</h2>
            <h2>Doctors</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
