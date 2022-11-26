import React from "react";
import { Provider } from "react-redux";
import TodoMui from "../todo-mui/main-component/TodoMui";
import { muiStore } from "../todo-mui/mui-store/mui-store";

const Contacts = () => {
  return (
    <>
      <Provider store={muiStore}>
        <TodoMui />
      </Provider>
    </>
  );
};

export default Contacts;
