import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";

const SubTaskForm = ({ id }) => {
  const [subtaskValue, setSubtaskValue] = useState("");
  const dispatch = useDispatch();
  const newSubtask = {
    subTitle: subtaskValue,
    id: id,
    subId: Date.now(),
    subTaskCompleted: false,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (subtaskValue.trim().length !== 0) {
      dispatch(taskActions.addSubtask(newSubtask));
      setSubtaskValue("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={subtaskValue}
        onChange={(e) => setSubtaskValue(e.target.value)}
      />
      <button type='submit'>confirm</button>
    </form>
  );
};

export default SubTaskForm;
