import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLockOpen,HiMenuAlt4 } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { BiLinkAlt   } from "react-icons/bi";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";

const Starter = () => {
  return (
    <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center">
          <span>
            <HiOutlineLockOpen className="text-primary" />
          </span>
          <h4 className="mx-2 text-sm font-bold text-black dark:text-white">
            Limited Access
          </h4>
          <span>
            <IoIosArrowDown className="text-primary" />
          </span>
          <span>
            <PiLineVertical size={"2rem"} className="text-primary" />
          </span>
          <div class="flex -space-x-1.5 rtl:space-x-reverse">
            <img
              class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic4}
              alt="pic4"
            />
            <img
              class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic5}
              alt=""
            />
            <img
              class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic6}
              alt=""
            />
            <img
              class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src={pic7}
              alt=""
            />
            <a
              class="flex items-center justify-center bg-primary w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +2
            </a>
          </div>
          <a
            class="flex items-center justify-center bg-secondary w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            <FiPlus size={"1.2rem"} />
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <BiLinkAlt className="text-secondary" />
        <PiLineVertical size={"2rem"} className="text-primary" />
        <span className="bg-secondary p-1 rounded-md">
        <HiMenuAlt4  className="text-white" />
        </span>
        <RxDashboard className="text-primary ml-1" />
      </div>
    </div>
  );
};

export default Starter;
