import Search from "./Search";
import List from "./List/index";
import { useState } from "react";
import { data } from "./data";
import { TaskType } from "./type";
import { useTodo } from "../../helper/hooks";
let id = 4;

type T0 = Exclude<a, b>;
type a = "a" | "b" | "c";
type b = "a";
// type Exclude<T, U> = T extends U ? never : T;
let x: T0;
const ToDoList: React.FC<{}> = ({}) => {
  // const { todos, setTodo, handleAdd, handleRemove, handleChange } = useTodo();
  const [todos, setTodo] = useState<TaskType[]>(data);

  // 添加
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

  return (
    <section
      style={{ boxShadow: "0px 48px 48px rgba(35, 21, 117, 0.03)" }}
      className="min-h-[600px] flex items-center rounded p-8 w-full bg-gradient-to-b from-[#4cc2fe] to-[#bd34fe] "
    >
      <div className="backdrop-blur-3xl p-10 bg-white/30 w-full rounded-sm min-h-[500px]">
        <Search onAddClick={handleAdd} />
        <List
          list={todos}
          handleRemove={handleRemove}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

export default ToDoList;
