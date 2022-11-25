import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";

const TaskForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: value,
      id: Date.now(),
      complete: false,
      subtask: [],
      isVisibile: false,
    };
    if (value.trim().length !== 0) {
      dispatch(taskActions.addTask(newTask));
      setValue("");
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add new Task</button>
    </form>
  );
};

export default TaskForm;
