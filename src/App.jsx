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

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm submitAddColor={addColor} />
      {colors.map((color) => {
        // .map over the array colors.js
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
