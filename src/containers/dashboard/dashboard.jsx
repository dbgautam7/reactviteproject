import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Home from "../home/home";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full bg-gray-100 mt-[58px]">
      <Navbar />
      <div className="flex flex-row bg-gray-100 w-full h-screen ">
        <div className="basis-1/4">
          <Sidebar />
        </div>
        <div className="basis-3/4">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
