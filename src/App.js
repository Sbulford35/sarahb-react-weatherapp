import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          <p>
            <a
              href="https://github.com/Sbulford35/sarahb-react-weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Sarah Bulford <br />
            Hosted with <a href="https://www.netlify.com">Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;