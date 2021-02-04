import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Seattle" />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <small>
      <p>
        {" "}
        <a href="https://github.com/jamiecase/https---github.com-jamiecase-react-weather">
          open-source code
        </a>{" "}
        by Jamie Case
      </p>
    </small>
  </React.StrictMode>,
  rootElement
);