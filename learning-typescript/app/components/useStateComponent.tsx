import React, { useState, useContext } from "react";
import { appContext } from "./UseContextComponent";

const UseStateComponent = () => {
  const [arr, setArr] = useState<number[]>([1]);
  const [name, setName] = useState<string | null>(null);

  const { first } = useContext(appContext);

  console.log(first);

  const addToArray = () => {
    setArr([...arr, arr.length + 1]);
  };

  const addToName = () => {
    setName("anirudh");
  };

  return (
    <div>
      <div>
        <button onClick={addToArray}>Add to Array</button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={addToName}>Add to Array</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
};

export default UseStateComponent;
