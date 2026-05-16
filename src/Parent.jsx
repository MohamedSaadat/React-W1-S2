import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [Count, setCount] = useState(0);
  return (
    <div className="p-3 bg-body-secondary">
      <h1>*Parent*</h1>
      <h2>Count: {Count}</h2>
      <button
        onClick={() => setCount(Count + 1)}
        className="btn btn-outline-danger mb-2"
      >
        increase
      </button>
      <div className="p-4 bg-warning">
        <Child count={Count} />
      </div>
    </div>
  );
}
