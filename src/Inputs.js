import React from "react";
import { useState } from "react";
import "./App.css";
export default function Inputs() {
  const valueArray = ["value 1", "value 2"];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(valueArray.length).fill(false)
  );

  return (
    <div>
      <h3>Simple Input</h3>
      <div>
        <input type="text"></input>
      </div>
      <h2>Select Your Choice</h2>
      <div>
        {valueArray.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label>{option}</label>
              {/* {checkedState[index]===true ? <Inputs></Inputs> : null} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
