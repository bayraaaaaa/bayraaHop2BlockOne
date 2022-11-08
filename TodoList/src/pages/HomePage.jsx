import { useState } from "react";
import { Header, ListSection, SearchSection } from "../components";

export const Home = () => {
  const [list, setList] = useState([]);


  const checkTask = (e, id) => {
    if (e.target.checked === true) {
      const newData = [...list];
      newData.filter((task) => task.id === id)[0].completed = true;
      console.log("newData: ", newData);
      setList(newData);
    } else {
      const newData = [...list];
      newData.filter((task) => task.id === id)[0].completed = false;
      setList(newData);
    }
  };

  const deleteTask = (id) => {
    setList((currentState) => currentState.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="d-flex" style={{heigth: '100vh', width: '100vw'}}>
        <ListSection checkTask={checkTask} deleteTask={deleteTask} list={list} setList={setList}/>
        <SearchSection checkTask={checkTask} deleteTask={deleteTask} list={list} setList={setList}/>
      </div>
    </div>
  );
};
