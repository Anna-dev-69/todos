import "./item-list.component.scss";
import { useState } from "react";
import tick from "../../assets/tick.svg";
import { IList, TaskStatusFilter } from "../../interfaces/common.interface";

interface ItemListProps {
  list: IList[];
  setList: React.Dispatch<React.SetStateAction<IList[]>>;
}

const ItemList = (props: ItemListProps) => {
  const handleItemClick = (id: string) => {
    props.setList((list) => {
      return list.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          status: p.status === "active" ? "completed" : "active",
        };
      });
    });
  };

  return (
    <ul className="ItemList">
      {props.list.map((p) => {
        return (
          <li key={p.id} onClick={() => handleItemClick(p.id)}>
            <div className="ItemList__done">
              {p.status === "completed" && (
                <img
                  style={{ width: 24, filter: "var(--filter-icon)" }}
                  src={tick}
                  alt=""
                />
              )}
            </div>

            <div
              className="ItemList__text"
              style={
                p.status === "completed"
                  ? {
                      textDecoration: "line-through",
                      color: "rgb(220, 220, 220)",
                    }
                  : undefined
              }
            >
              {p.text}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
