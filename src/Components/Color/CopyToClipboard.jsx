import { useState } from "react";
import "./ColorForm.css";

export default function CopyTo({ hex }) {
  const [copyStatus, setCopyStatus] = useState("Copy");

  async function CopyHex() {
    try {
      await navigator.clipboard.writeText(hex);
    } catch (error) {
      console.error(error.message);
    }
    console.log("Hexvalue:", hex);
  }

  const handleClick = async () => {
    await CopyHex(); // wait to copy the hex value
    setCopyStatus("Success!"); // update the button text
    setTimeout(() => setCopyStatus("Copy"), 3000); // reset
  };

  return <button onClick={handleClick}>{copyStatus}</button>;
}

// //   const [copyStatus, setCopyStatus] = useState("Copy");

// //   const copyToClipboard = () => {
// //     setCopyStatus("Success!");
// //     setTimeout(() => setCopyStatus("Copy"), 3000);
// //   };

// setCopyStatus("Succesfully copied!");
// setTimeout(() => setCopyStatus("Copy"), 3000);
