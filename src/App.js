import "./App.css";
import { useState } from "react";
import Inputs from "./Inputs";

function App() {
  const optionArray = ["Option1", "Option2", "Option3", "Option4", "Option5"];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(optionArray.length).fill(false)
  );

  return (
    <div className="App">
      <h1>Select Your Choice</h1>
      <div>
        {optionArray.map((option, index) => {
          return (
            <div key={index}>
              <input
                className="input"
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label className="text">{option}</label>
              {checkedState[index] === true ? <Inputs></Inputs> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
