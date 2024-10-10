import "./Color.css";
import { useState } from "react";

export default function Color({ color, deleteColor }) {
  //state track delete
  const [isConfirming, setIsConfirming] = useState(false);

  const deleteClick = () => {
    // if else
    if (isConfirming) {
      deleteColor(color.id); // deleteColor function "imported" as prop
    } else {
      setIsConfirming(true);
    }
  };

  const cancelClick = () => {
    setIsConfirming(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {isConfirming ? (
        <>
          <button onClick={cancelClick}>Cancel</button>
          <button onClick={deleteClick}>Delete</button>
        </>
      ) : (
        <button onClick={deleteClick}>Delete</button>
      )}
    </div>
  );
}

// () => deleteColor(color.id)
