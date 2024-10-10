import { useState } from "react";

import "./ColorInput.css";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="color-picker-container">
        <input
          className="color-picker"
          type="text"
          id={id}
          name={id}
          value={inputValue}
          onChange={handleInput}
        />
        <input type="color" value={inputValue} onChange={handleInput} />
      </div>
    </>
  );
}
