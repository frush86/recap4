import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  // colors holds current list of colors

  const addColor = (newColor) => {
    setColors([
      {
        id: nanoid(),
        ...newColor,
      },
      ...colors,
    ]);
  };

  // writing the function here because the parent has the array of all the colors
  function deleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }
  // updating the colors array by calling setColors
  // callback function: color => color.id !== id

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm submitAddColor={addColor} />
      {colors.map((color) => {
        // .map over the array colors.js
        return <Color key={color.id} color={color} deleteColor={deleteColor} />;
      })}
    </>
  );
}

export default App;
