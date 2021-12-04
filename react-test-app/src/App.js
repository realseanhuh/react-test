import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
      </header>
      <div>
        <button
          data-testid="minus-btn"
          disabled={disabled}
          onClick={() => setCounter((counter) => counter - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-btn"
          disabled={disabled}
          onClick={() => setCounter((counter) => counter + 1)}
        >
          +
        </button>
      </div>
      <div>
        <button
          data-testid="on-off-btn"
          style={{ backgroundColor: "blue" }}
          onClick={() => setDisabled((disabled) => !disabled)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
