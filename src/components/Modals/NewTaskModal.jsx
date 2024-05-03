import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, updateTask } from "../../redux/features/todos.thunk";
import { getTodos } from "../../redux/features/todos.slice";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const NewTaskModal = ({ onClose, taskToEdit }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoSlice);
  const [task, setTask] = useState(taskToEdit ? taskToEdit.title : "");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(updateTask({ id: taskToEdit.id, todo: task }));
      //Because we can't interact with database directly let's do some logics locally
      const updatedTasks = todos.todos.map((todo) =>
        todo.id === taskToEdit.id ? { ...todo, todo: task } : todo
      );
      dispatch(getTodos({ todos: updatedTasks }));
      toast.success(t("task_updated_successfully"))
    } else {
      dispatch(addNewTask({ todo: task, completed: false, userId: 1 }));
      //Because we can't interact with database directly let's do some logics locally
      if (Array.isArray(todos.todos)) {
        const newTask = {
          id: todos.todos.length + 1,
          todo: task,
          completed: false,
          userId: 1,
        };
        const updatedTasks = [newTask, ...todos.todos];
        if (typeof updatedTasks !== "undefined") {
          try {
            dispatch(getTodos({ todos: updatedTasks }));
          } catch (err) {
            throw err;
          }
        }
      }
      toast.success(t("task_added_successfully"))
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-9999 bg-black bg-opacity-50">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="modal bg-white w-96 rounded-lg p-8"
      >
        <h2 className="text-xl font-bold mb-4 dark:text-black">
          {t("new_task")}
        </h2>
        <input
          type="text"
          placeholder={t("enter_task_description")}
          className="w-full border border-gray-300 text-black rounded px-4 py-2 mb-4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded mr-2"
          >
            {t("submit")}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded text-black"
          >
            {t("cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskModal;
