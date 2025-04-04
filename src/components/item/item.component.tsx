import "./item.component.scss";

interface ItemProps {
  listId: string;
  handleClick: (value: string) => void;
}

const Item = (props: ItemProps) => {
  return (
    <div></div>
    // <li
    //   key={props.listId}
    //   onClick={() => {
    //     props.handleClick(props.listId);

    //     props.setCompleted((prev: any) => {
    //       if (props.completed.some((item) => item.id === list.id)) {
    //         return prev;
    //       } else {
    //         return [...prev, list];
    //       }
    //     });

    //     const activeItems = props.activeItems.filter(
    //       (item) => item.id !== list.id
    //     );

    //     props.setActiveItems(activeItems);

    //     console.log("props.completed", props.completed);
    //   }}
    // >
    //   <div className="ItemList__done">
    //     {listDone[index] ? (
    //       <img
    //         style={{ width: 24, filter: "var(--filter-icon)" }}
    //         src={tick}
    //         alt=""
    //       />
    //     ) : null}
    //   </div>
    //   <div
    //     className="ItemList__text"
    //     style={
    //       listDone[index]
    //         ? {
    //             textDecoration: "line-through",
    //             color: "rgb(220, 220, 220)",
    //           }
    //         : {}
    //     }
    //   >
    //     {list.text}
    //   </div>
    // </li>
  );
};
