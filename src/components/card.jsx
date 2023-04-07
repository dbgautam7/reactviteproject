import React from "react";

const MyCard = () => {
  return (
    <div className="flex flex-row justify-between w-full md:max-w-2xl">
      <div className="h-140 w-96 p-8 bg-[#FFFFFF] rounded-lg mr-4">
        <p>Card content</p>
      </div>
      <div className="h-140 w-96 p-8 bg-[#FFFFFF] rounded-lg">
        <p>Card content</p>
      </div>
    </div>
  );
};

export default MyCard;
