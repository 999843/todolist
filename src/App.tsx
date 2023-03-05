import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ToDoList from "./components/ToDoList/inex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="max-w-[1200px] h-full mx-auto flex">
        <div className="flex-2 flex justify-center flex-col pr-24">
          <div className="flex justify-center">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-5xl text-center">Vite + React</h1>
        </div>
        <div className="flex-1">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
