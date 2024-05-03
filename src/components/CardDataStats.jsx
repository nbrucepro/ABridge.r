import React, { ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Pic1 from "../assets/pic6.jpg";
import Pic2 from "../assets/pic4.jpg";
import Pic3 from "../assets/pic5.jpg";
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
        <div
          className={`flex p-2 items-center justify-center rounded-sm bg-meta-2 dark:bg-meta-4 
      ${
        children === "In Progress" || children === "En cours"
          ? "bg-[#F3F8FA] text-[#67B1E5]"
          : children === "To do" || children === "À faire"
          ? "bg-[#FBF8F3] text-[#D38B3F]"
          : "bg-[#EDF9F6] text-[#58B193]"
      }`}
        >
          {children}
        </div>
        <div className="cursor-pointer">
          <BsThreeDotsVertical size={"1.2rem"} className="text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-title-md font-bold text-black dark:text-white">
          {title.split(" ")[0]}
        </h4>
        <span className="text-sm font-small text-black dark:text-white">
          {title}
        </span>
      </div>
      <div className="mt-8  flex items-center justify-between">
        <div className="flex">
          <Cirlced element={Pic3} type={"image"} />
          <Cirlced element={Pic2} type={"image"} />
          <Cirlced element={Pic1} type={"image"} />
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
