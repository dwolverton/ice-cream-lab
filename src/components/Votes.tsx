import { useState } from "react";
import "./Votes.css";

function Votes() {
  const [chocolate, setChocolate] = useState(0);
  const [vanilla, setVanilla] = useState(0);
  const [strawberry, setStrawberry] = useState(0);

  const total = chocolate + vanilla + strawberry;
  const percentages = {
    chocolate: percentage(chocolate, total),
    vanilla: percentage(vanilla, total),
    strawberry: percentage(strawberry, total)
  };

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div className="button-bar">
        <button onClick={() => setChocolate(prev => prev + 1)}>Chocolate</button>
        <button onClick={() => setVanilla(prev => prev + 1)}>Vanilla</button>
        <button onClick={() => setStrawberry(prev => prev + 1)}>
          Strawberry
        </button>
      </div>
      { total === 0 ? 
        <p>No votes yet.</p> :
        <>
          {chocolate !== 0 && <>
            <p>
              <label>Chocolate:</label> {chocolate} ({percentages.chocolate})
            </p>
            <div
              className="Votes__bar Votes__bar--chocolate"
              style={{ width: percentages.chocolate }}
            ></div>
          </>}
          {vanilla !== 0 && <>
            <p>
              <label>Vanilla:</label> {vanilla} ({percentages.vanilla})
            </p>
            <div
              className="Votes__bar Votes__bar--vanilla"
              style={{ width: percentages.vanilla }}
            ></div>
          </>}
          {strawberry !== 0 && <>
            <p>
              <label>Strawberry:</label> {strawberry} ({percentages.strawberry})
            </p>
            <div
              className="Votes__bar Votes__bar--strawberry"
              style={{ width: percentages.strawberry }}
            ></div>
          </>}
        </> }
    </div>
  );
}

function percentage(n: number, total: number): string {
  if (total === 0) {
    return "0.0%";
  }
  return ((n / total) * 100).toFixed(1) + "%";
}

export default Votes;