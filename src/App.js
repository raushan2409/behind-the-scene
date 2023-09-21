import React, { useState,useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running");

  const toggleParagraph = useCallback(() => {
    if(allowToggle){
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);
  // whenever the function inside dependencies like allowtoggle changes and has a new value we want to recreate that function and stored at new recreated function and this insure that it allows us to use latest allowtoggle value inside the usecallback , if allow toggle was not change however than we don't recreate a function 

  const allowToggleHandler = ()=>{
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <DemoOutput show={showParagraph} /> */}
      {/* react actually checks that if the show value change and only that's the case it will be re-execute demooutput */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Paragraph</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;

// useCallback is a hook that allows us to store a function a cross component execution(so it allows us to tell react that we wonna save a function and this function should not be recreated on every execution with that one of the same funciton objectis stored so one at the same place in the memory and there fore the comparison that work . it will save a funciton of our choice basically somewhere in react internal storage and it always reuse same function objectthan when this component function executes  ) and using it is simple  just wrap the function that we wonna save with it and pass our function as a first argument to usecallback and use callback returns a store functionand when the app function reruns usecallback will looks for that stores function which react use for us and reuse that same function objects usecallback wants a second arg the second arg like a just array an array of dependencies of this use callback call

// injs functions are closure which means they close over the value that are available in there environment