import React from "react";
import logo from '../images/logo.png'
import { RiNotification3Line } from 'react-icons/ri';
import { GrSearch } from 'react-icons/gr';
import profile from '../images/profile.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white">
      <div className="mx-4 sm:mx-8 lg:mx-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full w-full">
        <div className="flex flex-row items-center max-md:hidden" style={{marginLeft: '170px'}}>
          <img src={logo} alt='logo' className="h-8 w-8 sm:h-10 sm:w-10 mr-2" />
          <p className="mt-2 mr-3 sm:mt-0 text-base sm:text-lg font-medium text-blue-500 ">zunun</p>
        </div>
        <div className="flex flex-row items-center justify-center max-md:flex-1" style={{marginRight: '234px'}}>
          <GrSearch className="w-6 h-6 mr-4 text-gray-400"  />
          <RiNotification3Line className="w-6 h-6 mr-4 text-gray-400 " />
          <img src={profile} alt='profile' className="w-6 h-6 text-gray-400 " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
