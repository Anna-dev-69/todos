import React from "react";
import "./App.scss";
import Todos from "./components/todos/todos.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <Todos />
    </div>
  );
};

export default App;
