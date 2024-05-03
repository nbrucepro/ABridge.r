import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos.slice";

export default configureStore({
  reducer: { todoSlice },
});
