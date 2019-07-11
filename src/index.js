import React from "react";
import ReactDOM from "react-dom";

import ClickOutside from "./ClickOutside";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClickOutside onClick={() => alert("clicked outside")}>
        <span>Click aorund me</span>
        <p>And me</p>
      </ClickOutside>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
