import { configureStore } from "@reduxjs/toolkit";
import muiTaskReducer from "./mui-task-reducer";

export const muiStore = configureStore({
  reducer: {
    mui_task: muiTaskReducer.reducer,
  },
});
