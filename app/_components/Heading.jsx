import React from "react";
import Card from "./homecomponents/Card";
import { Camera, Video } from "lucide-react";
import { MdLocalPharmacy } from "react-icons/md";

function Heading({ name, description }) {
  const services = [
    {
      title: "Digital Services",
      description:
        "We offer a variety of digital services that effectively enhance patients' outcomes in convenient and easily accessible ways.",
      icon: Camera,
    },
    {
      title: "Medical Services",
      description:
        "Our medical services cover both general and specialized fields, providing our patients with tailored specialized care designed specifically for their healthcare needs.",
      icon: Video,
    },
    {
      title: "Pharmacies",
      description:
        "We strive to be leaders in the field of pharmacy in the region within the Suleiman Al-Habib Group. This is achieved through providing our medical products through our accredited pharmacies and utilizing our application to facilitate patients' access to our products and services.",
      icon: MdLocalPharmacy,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mt-5 mb-5">{name}</h1>
        <h3 className="text-xl text-center font-bold text-primary">
          {description}
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center space-x-4">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            className="cursor-pointer "
          />
        ))}
      </div>
    </div>
  );
}

export default Heading;
