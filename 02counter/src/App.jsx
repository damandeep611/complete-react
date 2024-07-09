import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 12;
  //* the following is the use of the useState hook of react to modify the counter and add changes to it
  let [counter, newShit] = useState(0);

  //* addValue function varialbe that is used in the onclick button
  const addValue = () => {
    if (counter < 15) {
      newShit(counter + 1);
    }

    console.log("clicked", counter);
  };

  // *Decreasevalue function variable that is used in onclick button
  const DecreaseValue = () => {
    if (counter > 0) {
      newShit(counter - 1);
    }
    console.log("clicked Decrease", counter);
  };

  const resetCount = () => {
    newShit((counter = 0));
  };

  // *return statement
  return (
    <>
      <h1>Martian</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={DecreaseValue}>Decrease Values</button>
      <button onClick={resetCount}>Reset Counter</button>
    </>
  );
}

export default App;
