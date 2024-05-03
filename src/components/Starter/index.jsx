import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLockOpen, HiMenuAlt4 } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { BiLinkAlt } from "react-icons/bi";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";

const Starter = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center">
          <span>
            <HiOutlineLockOpen className="text-primary" />
          </span>
          <h4 className="mx-2 text-sm font-bold text-black dark:text-white">
            {t("limited_access")}
          </h4>
          <span>
            <IoIosArrowDown className="text-primary" />
          </span>
          <h1 className="hidden">Creative Website</h1>
          <span>
            <PiLineVertical size={"2rem"} className="text-primary" />
          </span>
          <div className="flex -space-x-1.5 rtl:space-x-reverse">
            <img
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic4}
              alt="pic4"
            />
            <img
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic5}
              alt=""
            />
            <img
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic6}
              alt=""
            />
            <img
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic7}
              alt=""
            />
            <a
              className="flex items-center justify-center bg-primary w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +2
            </a>
          </div>
          <a
            className="flex items-center justify-center bg-secondary w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            <FiPlus size={"1.2rem"} />
          </a>
        </div>
      </div>
      <div className="items-center sm:flex hidden">
        <BiLinkAlt className="text-secondary" />
        <PiLineVertical size={"2rem"} className="text-primary" />
        <span className="bg-secondary p-1 rounded-md">
          <HiMenuAlt4 className="text-white" />
        </span>
        <RxDashboard className="text-primary ml-1" />
      </div>
    </div>
  );
};

export default Starter;
