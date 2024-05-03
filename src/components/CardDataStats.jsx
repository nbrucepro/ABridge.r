import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { toast } from "react-toastify";
import Pic1 from "../assets/pic6.jpg";
import Pic2 from "../assets/pic4.jpg";
import Pic3 from "../assets/pic5.jpg";
import Cirlced from "./Sidebar/Cirlced";
import NewTaskModal from "./Modals/NewTaskModal";
import { getTodos } from "../redux/features/todos.slice";
import { useTranslation } from "react-i18next";
import SingleTodo from "./Modals/SingleTodo";

const CardDataStats = ({ taskId, title, children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { todos } = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleOpenModal = (task) => {
    setTaskToEdit({ id: task, title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".options-popup")) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const popup = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!popup.current) return;
      if (!showOptions || popup.current.contains(target)) return;
      setShowOptions(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!showOptions || keyCode !== 27) return;
      setShowOptions(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const handleDelete = (taskTodelete) => {
    if (taskTodelete && todos.length > 21) {
      const updatedTasks = todos.filter((todo) => todo?.id !== taskTodelete);
      dispatch(getTodos({ todos: updatedTasks }));
      toast.success(t("task_deleted_successfully"));
    } else {
      toast.error(t("mintodo_delete"));
    }
  };

  return (
    <div
      onClick={() => {
        setTaskToEdit({ id: taskId, title });
        setShowTodoModal(true);
      }}
      className=" cursor-pointer rounded-sm relative options-popup bg-white py-6 px-7.5 dark:border-strokedark dark:bg-boxdark"
    >
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
        <div
          ref={popup}
          className="cursor-pointer"
          onClick={handleToggleOptions}
        >
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
          className={`flex items-center gap-1 justify-center text-center text-sm text-primary font-medium `}
        >
          <AiOutlineMessage /> <span>3</span>
        </span>
      </div>
      {showOptions && (
        <div
          className="absolute bg-white border border-gray-200 shadow-md rounded-md p-2 z-10"
          style={{
            top: "60px",
            right: "40px",
          }}
        >
          <button
            onClick={() => handleOpenModal(taskId)}
            className="block w-full  text-black text-left py-1 px-3 hover:bg-gray-100 border-b-2 border-black"
          >
            {t("update")}
          </button>
          <button
            onClick={() => handleDelete(taskId)}
            className="block w-full text-black  text-left py-1 px-3 hover:bg-gray-100"
          >
            {t("delete")}
          </button>
        </div>
      )}
      {isModalOpen && (
        <NewTaskModal onClose={handleCloseModal} taskToEdit={taskToEdit} />
      )}
      {showTodoModal && (
        <SingleTodo
          todoToShow={taskToEdit}
          onClose={() => setShowTodoModal(false)}
        />
      )}
    </div>
  );
};

export default CardDataStats;
