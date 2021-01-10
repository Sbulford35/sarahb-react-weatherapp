import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pittsburgh" />
      </div>
      <Footer />
    </div>
  );
}

export default App;