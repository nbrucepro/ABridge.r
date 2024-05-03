import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import FilterSort from "../../assets/filterSort.svg";
import { BiSort } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import NewTaskModal from "../Modals/NewTaskModal";
import { useTranslation } from "react-i18next";
import { getTodos } from "../../redux/features/todos.slice";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState();
  const { todos } = useSelector((state) => state?.todoSlice?.todos);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const todoLen = todos?.length - 20 || 0;

  const handleNewTask = () => {
    setShowModal(true);
  };

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  const { t, i18n } = useTranslation();
  useEffect(()=>{
    setActiveTab(children[0]?.props?.label);
  },[children])
  const handleLanguageChange = () => {
    switch (activeTab) {
      case "Toutes les tâches":
        setActiveTab(t("all_task"));
        break;
      case "All Tasks":
        setActiveTab(t("all_task"));
        break;
      case "À faire":
        setActiveTab(t("todo"));
        break;
      case "To do":
        setActiveTab(t("todo"));
        break;
      case "En cours":
        setActiveTab(t("in_progress"));
        break;
      case "In Progress":
        setActiveTab(t("in_progress"));
        break;
      case "Completed":
        setActiveTab(t("completed"));
        break;
      case "Complété":
        setActiveTab(t("completed"));
        break;
    }
  };

  const handleReverse = () => {
    //sample reverse
    const reversedTodos = [...todos];
    reversedTodos.reverse();
    dispatch(getTodos({ todos: reversedTodos }));
  };

  useEffect(() => {
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [activeTab, i18n]);

  return (
    <div>
      <div className="lg:flex-row flex-col flex bg-white dark:bg-boxdark px-4 rounded-md justify-between sm:max-w-6xl lg:items-center items-start">
        <div className="flex">
          {typeof children !== "undefined" && children?.map((child) => (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? "border-b-4 border-[#7169CE] text-[#7169CE]"
                  : "text-primary dark:text-white"
              }  text-sm  sm:text-sm sm:px-4  font-medium sm:py-4`}
              onClick={(e) => {
                handleClick(e, child.props.label);
              }}
            >
              <span className="text-xs sm:text-sm px-[0.06rem]">
                {child.props.label}
              </span>
              <span className="mx-1 dark:bg-boxdark-2 bg-[#F3F4F5] px-1">
                {todoLen > 0 ? (
                  <>
                    {child.props.label === "All Tasks" ||
                    child.props.label === "Toutes les tâches"
                      ? todos?.length
                      : child.props.label === "To do" ||
                        child.props.label === "À faire"
                      ? todoLen
                      : child.props.label === "In Progress" ||
                        child.props.label === "En cours"
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
          <button
            onClick={handleReverse}
            className="flex items-center bg-transparent p-[0.16rem] font-semibold hover:bg-[#F3F4F5] dark:text-white text-[#6A6A6A] border border-primary hover:border-transparent rounded"
          >
            <span>
              <BiSort />
            </span>
            <span className="mx-1 text-sm flex">
              {t("filter")} &amp; {t("sort")}
            </span>
          </button>
          <button
            className="flex items-center p-[0.16rem] text-[#6A6A6A] dark:text-white bg-transparent ml-4 font-semibold  hover:bg-[#F3F4F5] border border-primary hover:border-transparent rounded"
            onClick={handleNewTask}
          >
            <span>
              <FiPlus />
            </span>
            <span className="mx-2 text-sm">{t("new_task")}</span>
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
