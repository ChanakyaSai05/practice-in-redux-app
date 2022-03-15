import React, { useContext } from "react";
import { countContext } from "./App";
import "./Mar11Value.css";

function Mar11Value() {
  const countContext1 = useContext(countContext);
  console.log(countContext1);
  return (
    <div className="count">
      {countContext1.countState}
      <button onClick={() => countContext1.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext1.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext1.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default Mar11Value;
