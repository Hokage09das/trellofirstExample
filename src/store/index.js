import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";

export const store = configureStore({
  reducer: { task: taskSlice.reducer },
});
