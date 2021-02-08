import { useEffect, useState } from "react";
import "./App.css";
import TodoWrapper from "./containers/TodoWrapper/TodoWrapper";
import background from "./assets/day.jpg";
import backgroundNight from "./assets/night.jpg";
function App() {
  const [mode, setMode] = useState(true);
  const [modeState, setModeState] = useState("day");
  const [backgroundState, setBackgroundState] = useState(background);
  let [tasks, updateTasks] = useState([
      {value: "Complete online javascript course", done: true, edit: false},
      {value: "Jog around the park 3x", done: false, edit: false},
      {value: "10 minutes meditation", done: false, edit: false},
      {value: "Read for 1 hour", done: false, edit: false},
      {value: "Pickup grouceries", done: false, edit: false},
      {value: "Complete Todo App on Frontend Mentor", done: false, edit: false}]);
  const [filterState, setFilterState] = useState('All');
  function updateMode() {
    setMode(!mode);
  }

  function addTask(event) {
    let cloneDB = [...tasks]
    cloneDB.push(event);
    updateTasks(cloneDB)
    console.log(tasks);
  }

  function removeTask(index) {
    let cloneDB = [...tasks]
    cloneDB.splice(index,1);
    updateTasks(cloneDB);
  }
  
  function clearTasks() {
    updateTasks([]);
  }

  function toggleDone(index) {
    let cloneDB = [...tasks]
    cloneDB[index].done === true
      ? (cloneDB[index].done = false)
      : (cloneDB[index].done = true);
    updateTasks(cloneDB);
  }

  useEffect(()=>{
   mode === true ? setModeState("night") : setModeState("day");
   mode === true
     ? setBackgroundState(backgroundNight)
     : setBackgroundState(background);
  })

  return (
    <div className={"AppWrapper " + modeState}>
      <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundState})` }}
      ></div>
      <TodoWrapper
        mode={mode}
        test={updateMode}
        tasks={tasks}
        pushTask={(event) => addTask(event)}
        removeTask={(event) => removeTask(event)}
        clearTasks = {clearTasks}
        toggleDone = {(event) => toggleDone(event)}
        filterState = {filterState}
        setFilter = {(event)=>setFilterState(event)}
      />
    </div>
  );
}

export default App;
