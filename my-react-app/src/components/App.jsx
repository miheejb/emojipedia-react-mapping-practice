
import React from "react";
import TermCard from "./TermCard";
import emojipedia from "../emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((item) => (
          <TermCard
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
