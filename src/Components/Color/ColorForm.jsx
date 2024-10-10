import "./ColorForm.css";

import ColorInput from "./ColorInput";

export default function ColorForm({
  submitAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    submitAddColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role<br></br>
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>

      <label htmlFor="hex">
        HEX<br></br>
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>

      <label htmlFor="contrast">
        Contrast<br></br>
        <ColorInput id="contrast" defaultValue={initialData.contrastText} />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
