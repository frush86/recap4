import "./Color.css";

export default function Color({ color, deleteColor }) {
  // create prop named color
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
      <button onClick={deleteColor}>Delete</button>
    </div>
  );
}
