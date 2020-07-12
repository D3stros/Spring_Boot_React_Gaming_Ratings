import React from "react";
import "./App.css";
import { getAllGames } from "./client";

function App() {
  getAllGames().then((res) =>
    res.json().then((games) => {
      console.log(games);
    })
  );
  return <h1>Test</h1>;
}

export default App;
