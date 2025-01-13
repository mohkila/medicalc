import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownIcon, ArrowDown, ChevronDown } from "lucide-react";
import Image from "next/image";

function Nav2() {
  const navLiunks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Medical Facilities",
      link: "/medicalfacilities",
    },
    {
      name: "Patient and Visitor",
      link: "/patientandvisitor",
    },
  ];
  return (
    <div className="flex justify-between items-center mt-5    ">
        <div className=" flex gap-5 items-center">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <div>
        <ul className="text-sm flex gap-3">
          {navLiunks.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:text-primary transition-all duration-300 flex items-center gap-1"
              >
                <a href={item.link}>{item.name}</a>

                <ChevronDown className="text-primary text-[12px]"  />
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      <div className="flex gap-5 items-center">
       <Button className="bttn"> Login</Button>
       <Button className="bttn"> Book Appoinment</Button>
      </div>
    </div>
  );
}

export default Nav2;
