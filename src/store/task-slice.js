import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completedTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, complete: !task.complete }
          : { ...task },
      );
    },
    toggleSubTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isVisible: !task.isVisible }
          : { ...task },
      );
    },
    addSubtask(state, action) {
      console.log(action.payload);
      state.tasks.filter((task) =>
        task.id === action.payload.id
          ? { ...task, subtask: task.subtask.push(action.payload) }
          : { ...task },
      );
    },
    deleteSubtask(state, action) {
      state.tasks = state.tasks.filter((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              subtask: (task.subtask = task.subtask.filter(
                (sub) => sub.subId !== action.payload.subId,
              )),
            }
          : { ...task },
      );
    },
    completedSubTask(state, action) {
      state.tasks = state.tasks.filter((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              subtask: (task.subtask = task.subtask.map((sub) =>
                sub.subId === action.payload.subId
                  ? { ...sub, subTaskCompleted: !sub.subTaskCompleted }
                  : { ...sub },
              )),
            }
          : { ...task },
      );
    },
  },
});

export default taskSlice;
export const taskActions = taskSlice.actions;