'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

function Trusted() {
  // Animation variants
  const slideInVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInFromRightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="container flex gap-9 mt-12 mb-5 p-5">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        animate="visible"
        variants={slideInVariant}
      >
        <h1 className="font-extrabold text-4xl mt-8 mb-8">
          The Most Trusted Healthcare Provider
        </h1>
        <p className="text-lg text-gray-700">
          Dr. Sulaiman Al Habib Group is one of the leading hospitals in the
          Middle East, with over 30 years of experience, a highly skilled team,
          and the latest medical technologies.
        </p>
        <Button className="mt-10">Learn More</Button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 bg-gray-900 text-white p-6 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={slideInFromRightVariant}
      >
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="p-5 text-center sssss">
            <h2 className="text-xl font-medium">Physician</h2>
            <h1 className="text-3xl font-extrabold">3500+</h1>
          </div>
          <div className="p-5 text-center sssss">
            <h2 className="text-xl font-medium">Beds</h2>
            <h1 className="text-3xl font-extrabold">1900+</h1>
          </div>
          <div className="p-5 text-center sssss">
            <h2 className="text-xl font-medium">Sub-Specialties</h2>
            <h1 className="text-3xl font-extrabold">60+</h1>
          </div>
          <div className="p-5 text-center sssss">
            <h2 className="text-xl font-medium">Accreditations</h2>
            <h1 className="text-3xl font-extrabold">+300</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Trusted;
