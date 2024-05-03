import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewTask } from "../../redux/features/todos.thunk";
import { getTodos } from "../../redux/features/todos.slice";

const NewTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoSlice);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewTask({ todo: task, completed: false, userId: 1 }));
      //because the dummy todos api have no interactive database we added new todo in state locally 
      if(Array.isArray(todos.todos)) {
        console.log(todos.todos.length)
        const newTask = { id: todos.todos.length + 1, todo: task, completed: false,userId: 1 };
        // const updatedTasks = [...todos.todos, newTask];
        const updatedTasks = [newTask, ...todos.todos];
        if(typeof updatedTasks !== "undefined"){
            try{
                dispatch(getTodos({todos:updatedTasks}));
            }catch(err){
                console.log(err)
            }
        }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-9999 bg-black bg-opacity-50">
      <form onSubmit={(e) => handleSubmit(e)} className="modal bg-white w-96 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4 dark:text-black">Add New Task</h2>
        <input
          type="text"
          placeholder="Enter task description"
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
            Add Task
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded text-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskModal;
