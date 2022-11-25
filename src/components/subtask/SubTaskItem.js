import React from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";

const SubTaskItem = ({ subTitle, id, subId }) => {
  const dispatch = useDispatch();
  const subtaskId = {
    subId,
    id,
  };

  const onDeleteSubtask = () => {
    dispatch(taskActions.deleteSubtask(subtaskId));
  };
  return (
    <li>
      <div>
        {subTitle} <button onClick={onDeleteSubtask}>Delete subtask</button>
      </div>
    </li>
  );
};

export default SubTaskItem;
