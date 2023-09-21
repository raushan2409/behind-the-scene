import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items, ascending } = props;

  const sortedList = useMemo(() => {
    console.log("Item sorted");
    return ascending
      ? items.slice().sort((a, b) => a - b)
      : items.slice().sort((a, b) => b - a);
  }, [items, ascending]);

  console.log("DemoList is Running");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
