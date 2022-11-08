import { useState, useRef } from "react";
import { Button, Input, Task } from "..";

export const ListSection = ({ list, setList, deleteTask, checkTask }) => {
  // const [value, setValue] = useState("");
  const inputRef = useRef();

  const addTask = () => {
    if (list[0]) {
      setList((currentState) => [
        ...currentState,
        {
          id: currentState[currentState.length - 1].id + 1,
          name: inputRef.current.value,
          completed: false,
        },
      ]);
      inputRef.current.value = '';
    } else {
      setList([{ id: 0, name: inputRef.current.value, completed: false }]);
      inputRef.current.value = '';
    }
  };

  return (
    <div
      className="d-flex flex-column gap-5 p-5 border-end border-dark"
      style={{ height: "100vh", width: "100%" }}
    >
      <h1>ToDo List</h1>
      <div className="d-flex flex-column align-items-center">
        <div>
          <Input reference={inputRef} />
          <Button onClick={addTask} value={'Add Task'} />
        </div>
        <div
          className="d-flex align-items-center flex-column"
          style={{ width: "100%" }}
        >
          {list.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                completed={task.completed}
                setList={setList}
                data={task}
                onClick={deleteTask}
                onChange={checkTask}
                title={task.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
