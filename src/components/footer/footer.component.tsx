import { useState } from "react";
import "./footer.component.scss";
import { IList, TaskStatusFilter } from "../../interfaces/common.interface";

interface FooterProps {
  activeItemsLength: number;
  currentStatus: TaskStatusFilter;
  setCurrentStatus: React.Dispatch<React.SetStateAction<TaskStatusFilter>>;
  setList: React.Dispatch<React.SetStateAction<IList[]>>;
}

const Footer = (props: FooterProps) => {
  const statuses = ["all", "active", "completed"] as const;

  return (
    <div className="Footer__footer-container">
      <div style={{ color: "rgb(127, 127, 127)" }}>
        {props.activeItemsLength} items left
      </div>

      <div className="Footer__button-container">
        <ul style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}>
          {statuses.map((status, index) => {
            const checked = status === props.currentStatus;

            return (
              <label
                key={index}
                style={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  transition: "box-shadow 300ms",
                  ...(checked
                    ? { boxShadow: "0 0 2px 1px rgb(202, 202, 202)" }
                    : undefined),
                }}
              >
                <input
                  type="radio"
                  name="currentStatus"
                  checked={checked}
                  onChange={() => props.setCurrentStatus(status)}
                  hidden
                />
                {status}
              </label>
            );
          })}
        </ul>

        <button
          onClick={() => {
            props.setList((list) =>
              list.filter((p) => p.status !== "completed")
            );
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Footer;
