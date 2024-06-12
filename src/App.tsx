import React, {useState, ChangeEvent} from "react";
import { ITask } from "./Interfaces";

const App: React.FC =() => {

  const[task, setTask] = useState<string>("");
  const[deadLine, setDeadLine] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([]);


  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name == 'task'){
      setTask(event.target.value);
    } else{
      setDeadLine(Number(event.target.value));
    }
      
    
  }


  return(
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Add a Tadaw" value={task} />
          <input type="number" name="deadline" placeholder = "Deadline (in Days)"value={deadLine}/>
        </div>
        <button>Add Tadaw </button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;