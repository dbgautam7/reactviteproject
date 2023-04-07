import React from "react";
import Sidebar from "../../components/sidebar";
import header from "../../images/header.png";
import MyCard from "../../components/card";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:mt-8 p-4 md:p-8 space-y-4">
      <img src={header} alt="header" className="w-full md:max-w-2xl" />
      <div className="flex flex-row justify-between w-full md:max-w-2xl ">
        <p className="flex-start text-xl ">Courses in progress</p>
        <p className="flex-end text-l text-[#00B9D6]">See All</p>
      </div>
      <div className="flex flex-row justify-between w-full md:max-w-2xl">
        <MyCard />
      </div>
    </div>
  );
};

export default Home;
