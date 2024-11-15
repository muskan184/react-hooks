import { useEffect, useState } from "react";
import "./index.css";

export const Challenge = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("muskan ");

  useEffect(() => {
    document.title = `count :${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div>
      <h1>usestate Challenge</h1>
      <p>
        Count:<span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>
        Name:
        <br />
        <span>{name}</span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
