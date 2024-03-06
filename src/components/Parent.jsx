import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import Child from "./Child";

let arr = [1, 2, 3];
arr.filter((_) => _ > 2);

export function Parent() {
  const [name, setName] = useState("thang");
  let [count, setCount] = useState(0);

  function handleClick() {
    setName("ngat");
  }

  const handleCount = () => {
    setCount(count++);
  };

  useEffect(() => {
    console.log("effect", count);
    return () => {
      console.log("clean up", count);
    };
  }, [count]);

  const childToParent = (res) => {
    console.log("parent");
    console.log(res);
  };
  return (
    <div>
      <p>parent component</p>
      <p>test change git 1</p>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Change name</button>
      <button onClick={() => setCount((count += 1))}>Change count</button>

      <hr />
      <Child childParent={childToParent}></Child>
    </div>
  );
}
