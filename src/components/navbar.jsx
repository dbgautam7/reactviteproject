import React from "react";
import logo from '../images/logo.png'
import { RiNotification3Line } from 'react-icons/ri';
import { GrSearch } from 'react-icons/gr';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white">
      <div className="mx-4 sm:mx-8 lg:mx-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full w-full">
        <div className="flex flex-row items-center">
          <img src={logo} alt='logo' className="h-8 w-8 sm:h-10 sm:w-10 mr-2" />
          <p className="mt-1 sm:mt-0 text-base sm:text-lg font-medium text-blue-500">zunun</p>
          <div className="hidden sm:flex flex-row items-center ml-4">
            <GrSearch className="w-6 h-6 mr-2 text-gray-400" />
            <RiNotification3Line className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <div className="sm:hidden flex flex-row items-center">
          <GrSearch className="w-4 h-4 mr-2 text-gray-400" />
          <RiNotification3Line className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
