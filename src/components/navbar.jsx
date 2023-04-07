import React from "react";
import logo from "../images/logo.png";
import { RiNotification3Line } from "react-icons/ri";
import { GrSearch } from "react-icons/gr";
import profile from "../images/profile.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between fixed top-0 left-0 right-0 h-16 bg-white shadow-md">
      <div className="flex items-center ml-12 md:ml-24 lg:ml-36">
        <img src={logo} alt="logo" className="h-12 w-20 mr-2" />
      </div>
      <div className="flex items-center mr-10 md:mr-14 lg:mr-32">
        <div className="flex flex-row items-center">
          <GrSearch className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-4 text-gray-400" />
          <RiNotification3Line className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-4 text-gray-400" />
          <img src={profile} alt="profile" className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
