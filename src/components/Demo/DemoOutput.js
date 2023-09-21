import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  //   return <p>{props.show ? "This is new!" : ""}</p>;
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};
// export default DemoOutput
export default React.memo(DemoOutput); //this is for functional components
// react memos allows us to optimize funcitonal components memo tells react for this component which should get as a arg react should look at the props this component gets and check the new values for all those props and compare to previous value, if only the value of props change then the component should be re-executed and re-evaluated
// and if the parent component change but the prop value for here did not change component execution will be skipped 
// this might bring up on new question , why are'nt we using react.memo in all component if it allows us to optimized into them because this optimization comes at a cost ,the memo method here tell react that whenever the app component changeit should go to this component here and compare the new prop value to previous prop value. so there for react need to do two things it needs to stoe the previous props value and it needs to make that comparison and that also have it's own performance call 

