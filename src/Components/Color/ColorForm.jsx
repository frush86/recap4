import "./ColorForm.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function ColorForm({ submitAddColor }) {
  const [hexColor, setHexColor] = useState("#000000");
  const [contrast, setContrast] = useState("#000000");

  const handleSumbit = (event) => {
    event.preventDefault();

    const newColor = {
      id: nanoid(),
      role: event.target.role.value,
      hex: hexColor,
      contrast: contrast,
    };
    submitAddColor(newColor);
    console.log(newColor);
  };

  const handleHexChange = (event) => {
    setHexColor(event.target.value);
  };

  const handleContrastChange = (event) => {
    setContrast(event.target.value);
  };

  return (
    <form className="color-form" onSubmit={handleSumbit}>
      <label htmlFor="role">
        Role<br></br>
        <input type="text" id="role" name="role" />
      </label>

      <label htmlFor="hex">
        HEX<br></br>
        <input type="text" value={hexColor} onChange={handleHexChange} />
        <input
          type="color"
          id="hex"
          name="hex"
          value={hexColor}
          onChange={handleHexChange}
        />
      </label>

      <label htmlFor="contrast">
        Contrast<br></br>
        <input type="text" value={contrast} onChange={handleContrastChange} />
        <input
          type="color"
          id="contrast"
          name="contrast"
          value={contrast}
          onChange={handleContrastChange}
        />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
