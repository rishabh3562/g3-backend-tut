import React, { useEffect } from "react";
import Atul from "./Atul";
const Parent = ({ name }) => {
  return (
    <>
      <h1>this is parent , called by {name} </h1>
      <Child name={name} />
    </>
  );
};
const Child = ({ name }) => {
  return (
    <>
      <h1>this is Child , called by {name} </h1>
    </>
  );
};
// cosnt;
const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  return (
    <>
      <Parent name={"atul"} />

      <Atul />
    </>
  );
};

export default App;
