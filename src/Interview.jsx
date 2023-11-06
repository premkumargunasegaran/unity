import React, { useState } from "react";

function Intervier() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decerement = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
         setcount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setcount(count - 1)
        }}
      >
        -
      </button>
    </div>
  );
}

export default Intervier;
