import { useEffect, useState } from "react";

export const Cleanup = () => {
  let [count, setCount] = useState(0);
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div>
        <p>Linkedin connection</p>
        <div>{count}</div>
        <h3>
          {" "}
          let's connect <br /> Realtime counter
        </h3>
      </div>
    </div>
  );
};
