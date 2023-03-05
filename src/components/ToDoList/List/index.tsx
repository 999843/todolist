import { useState } from "react";
import { TaskType } from "../type";
import Task from "./_components/Task";

export interface ListProps {
  handleRemove: (params: TaskType) => void;
  handleChange: (params: TaskType) => void;
  list: TaskType[];
}

const List: React.FC<ListProps> = ({ list, handleRemove, handleChange }) => {
  return (
    <ul className="bg-white h-full p-4 space-y-4 overflow-auto">
      {list.map((item, index) => {
        return (
          <li key={index}>
            <Task
              todo={item}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default List;
