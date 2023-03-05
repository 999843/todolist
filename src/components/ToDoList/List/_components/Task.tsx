import { ListProps } from "..";
import { TaskType } from "../../type";
import { useState } from "react";

interface PropsType extends Omit<ListProps, "list"> {
  todo: TaskType;
}

const Task = ({ todo, handleRemove, handleChange }: PropsType) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-2 flex items-center todos-center">
        <input
          type="checkbox"
          checked={todo.isCheck as boolean}
          onChange={(e) =>
            handleChange({
              ...todo,
              isCheck: e.target.checked,
            })
          }
          className="w-4 h-4"
        />
        {active ? (
          <input
            type="text"
            value={todo.title}
            onChange={(e) =>
              handleChange({
                ...todo,
                title: e.target.value,
              })
            }
            className="border pl-2 py-1"
          />
        ) : (
          <span className="text-lg">{todo.title}</span>
        )}
      </div>
      <div className="flex space-x-1">
        <span
          onClick={() => setActive(!active)}
          className="text-[#375375] block px-3 py-2 rounded bg-[#7eedaf] hover:cursor-pointer hover:shadow-lg"
        >
          {active ? "Save" : "Edit"}
        </span>
        <span
          onClick={() => handleRemove(todo)}
          className="block px-3 py-2 rounded text-white bg-gradient-to-r from-[#fa676c] to-[#f87557] hover:bg-[#eb520e] hover:cursor-pointer hover:shadow-lg"
        >
          Remove
        </span>
      </div>
    </div>
  );
};

export default Task;
