import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={increaseHandler}>Increment</button>
      <button onClick={decreaseHandler}>Decrement</button>
    </div>
  );
}
export default Counter;
