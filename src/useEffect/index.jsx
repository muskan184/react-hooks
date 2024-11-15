import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseState = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("count is ", count);
  //   }, [count]);

  //  example-2
  const [date, setdate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updateDate = new Date();
      setdate(updateDate.toLocaleTimeString());
    }, []);
  }, 1000);

  return (
    // <div className="container effect-container">
    //   <h1>useeffect hook</h1>
    //   <p>count:{count}</p>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    // </div>
    <div className="container effect-container">
      <h1>Date:{date}</h1>
    </div>
  );
};
