import useLocalStorageState from "use-local-storage-state"; // local storage
import { nanoid } from "nanoid";

import "./App.css";

import { initialColors } from "./lib/colors";

import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  //use local storage
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
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
  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  // updating the colors array by calling setColors
  // callback function: color => color.id !== id

  // need function to updatecolor
  // pass is down to color.jsx as a prop

  const updateColor = (colorId, updatedColorData) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === colorId ? { ...color, ...updatedColorData } : color
      )
    );
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm submitAddColor={addColor} />
      {colors.map((color) => {
        // .map over the array colors.js
        return (
          <Color
            key={color.id}
            color={color}
            deleteColor={deleteColor}
            updateColor={updateColor}
          />
        );
      })}
    </>
  );
}

export default App;
