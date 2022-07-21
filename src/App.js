import "./App.css";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

function App() {
  
  const handleSelect = (value)=>{

  }

  return (
    <div>
      <Multiselect
        isObject={false}
        // onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={(e)=>handleSelect(e)}
        options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
      />

    

    </div>
  );
}

export default App;
