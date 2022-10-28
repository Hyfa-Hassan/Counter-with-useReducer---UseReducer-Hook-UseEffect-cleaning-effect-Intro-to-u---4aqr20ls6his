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

export {counterReducer}
