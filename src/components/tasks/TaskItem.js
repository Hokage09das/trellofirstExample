import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";
import SubTaskForm from "../subtask/SubTaskForm";
import SubTaskList from "../subtask/SubTaskList";

const TaskItem = ({ title, id, complete, isVisible, subtask }) => {
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(taskActions.toggleSubTask(id));
  };
  const ondeleteTaskHandler = () => {
    dispatch(taskActions.deleteTask(id));
  };
  const onCompleteTask = () => {
    dispatch(taskActions.completedTask(id));
  };

  return (
    <li>
      <div
        style={
          complete
            ? { textDecoration: " line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </div>
      <button onClick={toggleForm}>add subTask</button>
      <button onClick={ondeleteTaskHandler}>deleteTask</button>
      <button onClick={onCompleteTask}>complete</button>
      {isVisible && (
        <>
          <h4>SubTask-list</h4>
          <SubTaskForm id={id} />
          <SubTaskList subtask={subtask} />
        </>
      )}
    </li>
  );
};

export default TaskItem;
