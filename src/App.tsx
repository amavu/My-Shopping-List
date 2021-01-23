import React, { useState } from "react";
import "./App.css";

function App() {
  interface ToDoElement {
    text: string;
    isCompleted: boolean;
  }

  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState<ToDoElement[]>([]);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const newToDoList = [...toDoList, { text: value, isCompleted: false }];
    setToDoList(newToDoList);
    setValue("");
  };

  const isCompletedHandler = (index: number) => {
    const newToDoList = [...toDoList];
    newToDoList[index].isCompleted = !newToDoList[index].isCompleted;
    setToDoList(newToDoList);
  };

  const deleteToDo = (deleteIndex: number) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(deleteIndex, 1);
    setToDoList(newToDoList);
  };

  const ToDoList = () => {
    return (
      <div>
        {toDoList.map((toDoElement, index) => (
          <div key={index}>
            <span>{toDoElement.text}</span>
            <input
              type="checkbox"
              checked={toDoElement.isCompleted}
              onChange={() => isCompletedHandler(index)}
            ></input>
            <button type="button" onClick={() => deleteToDo(index)}>
              delete
            </button>
            {console.log(toDoList)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h1>My Shopping List</h1>
      </header>
      <form onSubmit={submitHandler}>
        <input
          value={value}
          placeholder="legg til i handlelista"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button type="submit">Add to do</button>
      </form>
      <ToDoList />
    </div>
  );
}

export default App;
