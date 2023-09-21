import React from "react";

export default function MyParagraph(props) {
  console.log("MyParagraph Running");
  return <p>{props.children}</p>;
}
