import ItemList from "../item-list/item-list.component";
import React from "react";
import "./todos.component.scss";
import { useState } from "react";
import { IList, TaskStatusFilter } from "../../interfaces/common.interface";
import Footer from "../footer/footer.component";

const Todos: React.FC = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState<IList[]>([]);
  const [currentStatus, setCurrentStatus] = useState<TaskStatusFilter>("all");

  const handleAddToDo = () => {
    const text = task.trim();

    if (text === "") return;

    const newItem: IList = { id: Date(), text, status: "active" };

    setList((p) => [...p, newItem]);

    setTask("");
  };

  const filteredList =
    currentStatus === "all"
      ? list
      : list.filter((p) => p.status === currentStatus);

  console.log("filteredList", filteredList);

  return (
    <div className="Todos">
      <div className="Todos__title">todos</div>

      <div className="Todos__add-task">
        <input
          placeholder="Add a new task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddToDo}>Add</button>
      </div>

      <div style={{ flex: 1 }}>
        <ItemList list={filteredList} setList={setList} />
      </div>

      <Footer
        setList={setList}
        activeItemsLength={list.filter((p) => p.status === "active").length}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
      />
    </div>
  );
};

export default Todos;
