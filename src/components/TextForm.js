import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  function handleLowClick() {
    let newText = text.slice(2);
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed.", "success");
  };
  const [text, setText] = useState("Enter text here2");
  return (
    <>
      <div
        className="container"
        style={{
          color: "black",
          backgroundColor: props.mode == "dark" ? "grey" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode == "dark" ? "grey" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="button btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button
          className="button btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button className="button btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="button btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Handle White Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          backgroundColor: props.mode == "dark" ? "grey" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.lenght > 0
            ? text
            : "Enter Something in the above textbox to for preview"}{" "}
        </p>
      </div>
    </>
  );
}
