import React from "react";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
