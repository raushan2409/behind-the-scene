import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  // destructuring to pull the icons inside the props
  const { items } = props;
  const sortedList = useMemo(() => {
    // return props.items.sort((a, b) => a - b);
    console.log("Item sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  //   props.items.sort((a, b) => a - b); //u don't want to run this code everytime the entire component is reevaluated we can use reactmemo in demolist

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
// export default DemoList;
export default React.memo(DemoList);
// usememo hook basically allows u to memoize(store any kind of data that u wonna store) just like use callback
