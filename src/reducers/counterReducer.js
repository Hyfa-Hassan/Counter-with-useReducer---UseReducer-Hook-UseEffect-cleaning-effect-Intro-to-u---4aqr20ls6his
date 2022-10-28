import React, { useReducer } from "react";
const counterReducer = (state,action) =>{
  const initialState = { count: 0 };
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={() => dispatch({ type: "increment" })}>+</button>
      <button id="decrement-btn" onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export {counterReducer, Counter}
