import React from "react";
import { Camera } from "lucide-react";

function Card({ title, description, icon: Icon }) {
  return (
    <div className="hover:bg-secondary w-[320px] p-2 zssss  cursor-pointer  mt-14">
      <span className="bgimg2 bg-slate-400">
        <Icon
          size={64}
          className="ssss bg-[#E74F54] p-5 hover:bg-secondary mb-8"
        />
      </span>
      <h1 className="text-3xl font-extrabold  mb-2">{title}</h1>
      <h4 className="text-gray-300">{description}</h4>
    </div>
  );
}

export default Card;
