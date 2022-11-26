import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  muiTasks: [],
};
const muiTaskReducer = createSlice({
  name: "mui_task",
  initialState,
  reducers: {
    addTask(state, { payload }) {
      console.log(payload);
      state.muiTasks.push(payload);
    },
  },
});

export default muiTaskReducer;
export const muiAction = muiTaskReducer.actions;
