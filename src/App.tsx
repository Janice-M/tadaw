import React, {useState} from "react";

const App: React.FC =() => {

  const[task, setTask] = useState<string>("");
  const[deadLine, setDeadLine] = 


  return(
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Add a Tadaw" value={task} />
          <input type="number" name="deadline" placeholder = "Deadline (in Days)"/>
        </div>
        <button>Add Tadaw </button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;