import React from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { AiOutlineCalendar, AiFillHome } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import googlePlay from "../images/googlePlay.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-start p-12">
        <Link to="/home" activeClassName="text-blue-600">
          <span className="flex items-center p-4">
            <AiFillHome className="mr-2" />
            Home
          </span>
        </Link>

        <Link to="/courses" activeClassName="text-blue-600">
          <span className="flex items-center p-4">
            <GoBook className="mr-2" />
            My Course
          </span>
        </Link>

        <Link to="/assignments" activeClassName="text-blue-600">
          <span className="flex items-center p-4">
            <MdAssignmentAdd className="mr-2" />
            Assignment
          </span>
        </Link>

        <Link to="/calendar" activeClassName="text-blue-600">
          <span className="flex items-center p-4">
            <AiOutlineCalendar className="mr-2" />
            Calendar
          </span>
        </Link>

        <Link to="/profile" activeClassName="text-blue-600">
          <span className="flex items-center p-4">
            <HiOutlineUser className="mr-2" />
            Profile
          </span>
        </Link>
      </div>
      <div className="mt-12">
        Download app
        <Link to="https://play.google.com/store">
          <img src={googlePlay} alt="googleplay" h={20} w={50} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
