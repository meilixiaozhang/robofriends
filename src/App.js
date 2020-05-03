import React from "react";
import Card from "./components/Card";
import robots from "./robots";
import "tachyons";

function createCard(props) {
  return (
    <Card
      key={props.id}
      name={props.name}
      username={props.username}
      email={props.email}
    />
  );
}
function App() {
  return (
    <div className="App">
      <h1>Robofriends</h1>
      {robots.map(createCard)}
    </div>
  );
}

export default App;
