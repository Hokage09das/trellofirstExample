import React from "react";
import { Provider } from "react-redux";
import { muiStore } from "../mui-store/mui-store";

import MuiTasksForm from "../components/MuiTasksForm";
import MuiTaskList from "../components/MuiTaskList";

const TodoMui = () => {
  return (
    <>
      <Provider store={muiStore}>
        <MuiTasksForm />
        <MuiTaskList />
      </Provider>
    </>
  );
};

export default TodoMui;
