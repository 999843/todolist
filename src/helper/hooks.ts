import { useState } from "react";
import { data } from "../components/ToDoList/data";
import { TaskType } from "../components/ToDoList/type";
let id = 4;
export const useTodo = () => {
  const [todos, setTodo] = useState<TaskType[]>(data);
  const handleAdd = (task: string) => {
    setTodo([
      ...todos,
      {
        id: ++id,
        title: task,
        isCheck: false,
      },
    ]);
  };

  // 删除
  const handleRemove = (params: TaskType) => {
    setTodo(todos.filter((item) => item.id !== params.id));
  };

  const handleChange = (params: TaskType) => {
    setTodo(
      todos.map((item) => {
        if (item.id === params.id) {
          return params;
        } else {
          return item;
        }
      })
    );
  };
  return { todos, setTodo, handleAdd, handleRemove, handleChange };
};
