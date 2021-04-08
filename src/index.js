import React from "react";
import ReactDom from "react-dom";

let greeting = "";
const today = new Date().getHours();
let customStyle = {};

if (today < 12) {
  greeting = "morning";
  customStyle = "red";
} else if (today > 12 && today < 18) {
  greeting = "afternoon";
  customStyle = "green";
} else {
  greeting = "evening";
  customStyle = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={{ color: customStyle }}>
      Good {greeting}!
    </h1>
  </div>,
  document.getElementById("root")
);
