import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { getTodos } = todoSlice.actions;

export default todoSlice.reducer;
