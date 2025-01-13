import React from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

function Header() {
  return (
    <div className=" p-4  items-center   shadow-secondary shadow-md">
      <div className="container">
        <Nav1 />
        <Nav2 />
      </div>
    </div>
  );
}

export default Header;
