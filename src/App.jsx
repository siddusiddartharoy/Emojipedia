import React from "react";
import emojis from "./emojipedia.js";
import Event from "./Event.js";

function pedia(ped) {
  return (
    <Event
      key={ped.id}
      id={ped.id}
      emoji={ped.emoji}
      name={ped.name}
      meaning={ped.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        {" "}
        <span>emojipedia</span>{" "}
      </h1>
      <dl className="dictionary">{emojis.map(pedia)}</dl>
    </div>
  );
}

export default App;
