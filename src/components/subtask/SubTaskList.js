import React from "react";
import SubTaskItem from "./SubTaskItem";

const SubTaskList = ({ subtask }) => {
  return (
    <ul>
      {subtask.map((sub) => (
        <SubTaskItem
          key={sub.subId}
          {...sub}
        />
      ))}
    </ul>
  );
};

export default SubTaskList;
