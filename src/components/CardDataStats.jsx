import React, { ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Cirlced from "./Sidebar/Cirlced";

const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm bg-white py-6 px-7.5 dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-sm bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <div className="cursor-pointer">
        <BsThreeDotsVertical size={"1.2rem"} className="text-primary"/>
      </div>
      </div>
      <div className="mt-4">
          <h4 className="text-title-md font-bold text-black dark:text-white">
            Footer Design
          </h4>
          <span className="text-sm font-small">Landing Page UI</span>
        </div>
      <div className="mt-8  flex items-center justify-between">
        <div className="flex">
          <Cirlced element={Pic3} type={"image"}/>
          <Cirlced element={Pic2} type={"image"}/>
          <Cirlced element={Pic1} type={"image"}/>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-meta-3"
          }`}
        >
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
