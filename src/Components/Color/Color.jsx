import { useState } from "react";

import "./Color.css";

import ColorForm from "./ColorForm";
import CopyTo from "./CopyToClipboard";

export default function Color({ color, deleteColor, updateColor }) {
  //state track delete and confirming
  const [isConfirming, setIsConfirming] = useState(false);
  // toggle edit
  const [isEditing, setIsEditing] = useState(false);

  // DELETE
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

  // EDIT
  const edit = () => {
    setIsEditing(!isEditing);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  // need a function for update color
  // use something that .maps color form App.jsx??
  // import as prop

  const handleUpdateColor = (updatedData) => {
    updateColor(color.id, updatedData);
    setIsEditing(false); // exit edit mode
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {!isEditing ? (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <CopyTo hex={color.hex} />
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>

          {isConfirming ? (
            <>
              <button onClick={cancelClick}>Cancel</button>
              <button onClick={deleteClick}>Yes, Delete</button>
            </>
          ) : (
            <button onClick={deleteClick}>Delete</button>
          )}
          <button onClick={edit}>Edit</button>
        </>
      ) : (
        <>
          <ColorForm
            submitAddColor={handleUpdateColor}
            initialData={color}
            isEditing={true}
          />
          <button onClick={cancelEdit}>Cancel</button>
        </>
      )}
    </div>
  );
}
