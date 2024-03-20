import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
