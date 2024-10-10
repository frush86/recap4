import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInput}
      />
      <input type="color" value={inputValue} onChange={handleInput} />
    </>
  );
}
