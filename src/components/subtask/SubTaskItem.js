import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";

const SubTaskItem = ({ subTitle, id, subId, subTaskCompleted }) => {
  const dispatch = useDispatch();
  const subtaskId = {
    subId,
    id,
  };
  const onDeleteSubtask = () => {
    dispatch(taskActions.deleteSubtask(subtaskId));
  };
  const onCompletesubTask = () => {
    // console.log(subTaskCompleted, "sub");

    dispatch(taskActions.completedSubTask(subtaskId));
  };

  console.log(subTaskCompleted);
  return (
    <li>
      <div
        style={
          subTaskCompleted
            ? { textDecoration: " line-through" }
            : { textDecoration: "none" }
        }
      >
        {subTitle} <button onClick={onDeleteSubtask}>Delete subtask</button>
        <button onClick={onCompletesubTask}>complete subtask</button>
      </div>
    </li>
  );
};

export default SubTaskItem;
