import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
      {initialColors.map((color) => {
        // .map over the array colors.js
        return <Color key={color.id} color={color} />;
        // arrow function to create each color object into the component Color
      })}
    </>
  );
}

export default App;
