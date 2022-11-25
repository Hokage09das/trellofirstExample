import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.task);
  return (
    <ul>
      {tasks.length === 0 ? <h1>Tasklist empty</h1> : <h1> Task-List</h1>}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
