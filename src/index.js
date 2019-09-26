import React from "react";
import ReactDOM from "react-dom";
import NumPicker from "./NumPicker";
import Hello from "./Hello";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
