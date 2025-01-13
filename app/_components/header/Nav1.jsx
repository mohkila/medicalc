import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { Search } from "lucide-react";
function Nav1() {
  const navLiunks = [
    {
      name: "Media Hub",
      link: "/media-hub",
    },
    {
      name: "Investor Relations",
      link: "/investor-relations",
    },
    {
      name: "Research & Articles",
      link: "/research-and-articles",
    },
    {
      name: "HMG Academy",
      link: "/hmg-academy",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];
  return (
    <div className="flex justify-between items-center">
      <div>
        <ul className="text-sm flex gap-3">
          {navLiunks.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:text-primary transition-all duration-300"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <span>
          <FaPerson
            size={30}
            className="rounded-full border-2 p-1
           hover:text-primary transition-all duration-300 hover:border-primary cursor-pointer"
          />
        </span>

        <span>
          <GrLanguage
            size={30}
            className="  border-l-2 border-gray-700  p-1
           hover:text-primary transition-all duration-300 hover:border-primary cursor-pointer"
          />
        </span>
        <span
          className="flex gap-1 items-center  p-1  
           hover:text-primary transition-all duration-300 hover:border-primary cursor-pointer"
        >
          <FaPhoneAlt
            size={30}
            className="    p-1 border-l-2 border-gray-700 
           hover:text-primary transition-all duration-300 hover:border-primary cursor-pointer"
          />
          Contact Us
        </span>
        <span>
          <Search
            size={30}
            className="    p-1  border-l-2 border-gray-700 
           hover:text-primary transition-all duration-300 hover:border-primary cursor-pointer"
          />
        </span>
      </div>
       
    </div>
  );
}

export default Nav1;
