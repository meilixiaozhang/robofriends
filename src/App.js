import React, { useState, useEffect } from "react";
// import robots from "./robots";
import "tachyons";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Scroll from "./components/Scroll";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [robots, setRobots] = useState([]);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  async function fetchData() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    users.json().then((users) => setRobots(users));
    const results = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div className="App tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={handleChange} />
      <Scroll>{searchResults.map(CardList)}</Scroll>
    </div>
  );
}

export default App;
