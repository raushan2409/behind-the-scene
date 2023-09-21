import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [ascending, setAscending] = useState(true); // Sorting order state

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const toggleSortOrderHandler = useCallback(() => {
    setAscending((prevState) => !prevState);
  }, []);

  const sortedList = useMemo(() => {
    console.log("Sorting items");
    return [...listItems].sort((a, b) => {
      return ascending ? a - b : b - a;
    });
  }, [listItems, ascending]);

  const sortButtonText = ascending
    ? "Change to Descending Order"
    : "Change to Ascending Order";

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} ascending={ascending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <hr />
      <Button onClick={toggleSortOrderHandler}>{sortButtonText}</Button>
    </div>
  );
}

export default App;
