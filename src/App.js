import "./App.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

function App() {
  const [optionSelected, setOptionSelected] = useState([]);

  const handleSelect = (value) => {
    setOptionSelected([...value]);
  };
  const handleRemove = (value) => {
    setOptionSelected([...value]);
  };

  return (
    <div>
      <Multiselect
        isObject={false}
        onRemove={(e) => handleRemove(e)}
        onSearch={function noRefCheck() {}}
        onSelect={(e) => handleSelect(e)}
        options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
      />

      {optionSelected.map((value, index) => {
        return (
          <div key={index}>
            <h4>{value}</h4>
            <input type="text"></input>
            <div>
              <Multiselect
                isObject={false}
                // onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                onSearch={function noRefCheck() {}}
                onSelect={function noRefCheck() {}}
                options={[
                  "Value 1",
                  "Value 2",
                  "Value 3",
                  "Value 4",
                  "Value 5",
                ]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
