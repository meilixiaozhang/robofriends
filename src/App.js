import React, { useState, useEffect } from "react";
import robots from "./robots";
import "tachyons";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={handleChange} />
      {searchResults.map(CardList)}
    </div>
  );
}

export default App;
