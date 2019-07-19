import React from "react";
import "./App.css";
import Aggregate from "./Components/Aggregate";
import Filter from "./Components/Filter";
import Playlist from "./Components/Playlist";

function App() {
  const defaultTextColor = "#fff";
  return (
    <div className="App" style={{ color: defaultTextColor }}>
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
