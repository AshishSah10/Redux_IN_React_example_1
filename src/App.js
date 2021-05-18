import { useState } from "react";
import "./styles.css";


export default function App() {
  const [count, setCount] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        state = action.payload + 1;
        return state;
      default:
        return state;
    }
  };
  const dispatch = (reducerObject) => {
    const { type, payload } = reducerObject;
    const updatedState = reducer(count, reducerObject);
    console.log(updatedState);
    setCount(updatedState);
  };
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREASE", payload: count })}>
        Up
      </button>
      <br />
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
