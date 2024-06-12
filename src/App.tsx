import React from "react";

const App: React.FC =() => {


  return(
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Add a Tadaw" />
          <input type="number" name="deadline" placeholder = "Deadline (in Days)"/>
        </div>
        <button>Add Tadaw </button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;