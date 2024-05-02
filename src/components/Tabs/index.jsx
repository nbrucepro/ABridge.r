import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import FilterSort from "../../assets/filterSort.svg";
import { BiSort } from "react-icons/bi";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className="flex bg-white dark:bg-boxdark px-4 rounded-md justify-between sm:max-w-6xl items-center">
        <div className="flex">
          {children.map((child) => (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? "border-b-4 border-[#7169CE] text-[#7169CE]"
                  : "text-primary dark:text-white"
              } px-2 sm:px-4  font-medium p-1 sm:py-4`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              {child.props.label}
              <span className="mx-2 dark:bg-boxdark-2 bg-[#F3F4F5] px-1">
                3
              </span>
            </button>
          ))}
        </div>
        <div className="xsm:flex hidden items-center sm:ml-24 justify-between">
          <button class="flex items-center bg-transparent p-1 font-semibold hover:bg-[#F3F4F5] dark:text-white text-[#6A6A6A] border border-primary hover:border-transparent rounded">
            {/* <span className="h-4 w-4 text-[#6A6A6A]">
              <img className="h-full w-full text-[#6A6A6A]" src={FilterSort}/>
            </span> */}
            <span>
              <BiSort />
            </span>
            <span className="mx-1">Filter &amp; Sort</span>
          </button>
          <button class="flex items-center px-2 text-[#6A6A6A] dark:text-white bg-transparent ml-4 p-1 font-semibold  hover:bg-[#F3F4F5] border border-primary hover:border-transparent rounded">
            <span>
              <FiPlus />
            </span>
            <span className="mx-2">New Task</span>
          </button>
        </div>
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
