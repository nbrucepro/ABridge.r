import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos } from "./todos.slice";

export const fetchTodos = createAsyncThunk(
  "todos/all",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get("https://dummyjson.com/todos?limit=23");
      dispatch(getTodos(response.data));
    } catch (error) {
      throw error;
    }
  }
);

export const addNewTask = createAsyncThunk(
  "todos/add",
  async (taskData, { dispatch }) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/todos/add",
        taskData
      );
      // After adding the new task, fetch updated todos
      //   dispatch(fetchTodos());
    } catch (error) {
      throw error;
    }
  }
);
export const updateTask = createAsyncThunk(
  "todos/add",
  async (taskData, { dispatch }) => {
    try {
      //Db is not interactive so let's comment this lines to avoid developemnt error such api 404
      //   const response = await axios.put(
      //     `https://dummyjson.com/todos/${taskData.id}`,
      //     taskData
      //   );
      // After adding the new task, fetch updated todos
      //   dispatch(fetchTodos());
    } catch (error) {
      throw error;
    }
  }
);
export const deleteTask = createAsyncThunk(
  "todos/add",
  async (taskData, { dispatch }) => {
    try {
      //Db is not interactive so let's comment this lines to avoid developemnt error such api 404
      //   const response = await axios.put(
      //     `https://dummyjson.com/todos/${taskData.id}`,
      //     taskData
      //   );
      // After adding the new task, fetch updated todos
      //   dispatch(fetchTodos());
    } catch (error) {
      throw error;
    }
  }
);
