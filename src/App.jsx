import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  // colors holds current list of colors

  function addColor(newColor) {
    // passing to color form
    setColors((prev) => [newColor, ...prev]);
  }

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
