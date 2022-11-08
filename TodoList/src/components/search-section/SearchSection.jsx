import { useEffect, useRef, useState } from "react";
import { Input, Task, Button } from "..";

export const SearchSection = ({ list, setList, deleteTask, checkTask }) => {
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef("");

  const search = () => {
    let currentTodos = [];
    let newList = [];
    if (inputRef.current.value !== "") {
      currentTodos = list;
      newList = currentTodos.filter((todo) => {
        const lc = todo.name.toLowerCase();
        const filter = inputRef.current.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = list;
    }
    setSearchData(newList);
  };

  useEffect(() => {
    search();
  }, [list])

  return (
    <div
      className="d-flex flex-column gap-5 p-5"
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1>Search</h1>
      <div className="d-flex flex-column align-items-center">
        <Input reference={inputRef} />
        <Button value={"Search"} onClick={search} />
      </div>
      <div>
        {searchData.map((task) => {
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
  );
};
