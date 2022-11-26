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
          : task,
      );
    },
    toggleSubTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isVisible: !task.isVisible }
          : task,
      );
    },
    addSubtask(state, { payload }) {
      const currentSubTask = state.tasks.find((task) => task.id === payload.id);
      currentSubTask.subtask.push(payload);
      //     ? { ...task, subtask: task.subtask.push(action.payload) }
      //     : task,
      // );
    },
    deleteSubtask(state, { payload: { id, subId } }) {
      const currentSubTask = state.tasks.find((task) => task.id === id);
      currentSubTask.subtask = currentSubTask.subtask.filter(
        (sub) => sub.subId !== subId,
      );
    },
    completedSubTask(state, { payload: { id, subId } }) {
      const currentSubTask = state.tasks.find((task) => task.id === id);
      currentSubTask.subtask = currentSubTask.subtask.map((sub) =>
        sub.subId === subId
          ? { ...sub, subTaskCompleted: !sub.subTaskCompleted }
          : sub,
      );
    },
  },
});

export default taskSlice;
export const taskActions = taskSlice.actions;
