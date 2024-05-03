import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import FilterSort from "../../assets/filterSort.svg";
import { BiSort } from "react-icons/bi";
import { useSelector } from "react-redux";
import NewTaskModal from "../Modals/NewTaskModal";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const { todos } = useSelector((state) => state.todoSlice.todos);
  const [showModal, setShowModal] = useState(false);

  const todoLen = todos?.length - 20 || 0;

  const handleNewTask = () => {
    setShowModal(true);
  };

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className="lg:flex-row flex-col flex bg-white dark:bg-boxdark px-4 rounded-md justify-between sm:max-w-6xl lg:items-center items-start">
        <div className="flex">
          {children.map((child) => (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? "border-b-4 border-[#7169CE] text-[#7169CE]"
                  : "text-primary dark:text-white"
              }  text-sm  sm:text-sm sm:px-4  font-medium sm:py-4`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
                <span className="text-xs sm:text-sm px-[0.06rem]">
              {child.props.label}
                </span>
                {/* <span className={`${(child.props.label !== "All tasks" || child.props.label !== "Completed") && "flex" }`}> */}
              <span className="mx-1 dark:bg-boxdark-2 bg-[#F3F4F5] px-1">
                {todoLen > 0 ? (
                    <>
                    {child.props.label === "All tasks"
                      ? todos?.length
                      : child.props.label === "To do"
                      ? todoLen
                      : child.props.label === "In Progress"
                      ? 6
                      : 14}
                  </>
                ) : (
                    0
                    )}
                {/* </span> */}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center sm:ml-24 justify-between lg:my-0 my-2">
          <button className="flex items-center bg-transparent p-[0.16rem] font-semibold hover:bg-[#F3F4F5] dark:text-white text-[#6A6A6A] border border-primary hover:border-transparent rounded">
            {/* <span className="h-4 w-4 text-[#6A6A6A]">
              <img className="h-full w-full text-[#6A6A6A]" src={FilterSort}/>
            </span> */}
            <span>
              <BiSort />
            </span>
            <span className="mx-1 text-sm flex">Filter &amp; Sort</span>
          </button>
          <button
            className="flex items-center p-[0.16rem] text-[#6A6A6A] dark:text-white bg-transparent ml-4 font-semibold  hover:bg-[#F3F4F5] border border-primary hover:border-transparent rounded"
            onClick={handleNewTask}
          >
            <span>
              <FiPlus />
            </span>
            <span className="mx-2 text-sm">New Task</span>
          </button>
          {showModal}
          {showModal && <NewTaskModal onClose={() => setShowModal(false)} />}
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
