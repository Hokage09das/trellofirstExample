import React from "react";
import MuiTaskItem from "./MuiTaskItem";
import { useSelector } from "react-redux";

const MuiTaskList = () => {
  const { muiTasks } = useSelector((state) => state.mui_task);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {muiTasks.map((task) => (
        <MuiTaskItem
          key={task.id}
          {...task}
        />
      ))}
    </div>
  );
};

export default MuiTaskList;
