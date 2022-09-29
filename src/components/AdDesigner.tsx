import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {
  const [ flavor, setFlavor ] = useState("Pick One");
  const [ darkTheme, setDarkTheme ] = useState(false);
  const [ fontSize, setFontSize ] = useState(32);

  let adClassName = "Ad " + (darkTheme ? "Ad--dark" : "Ad--light");

  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <section className="AdDesigner__ad">
        <div className={adClassName}>
          <p className="Ad__prompt">Vote For</p>
          <p className="Ad__choice" style={{fontSize: fontSize + 'px'}}>{flavor}</p>
        </div>
      </section>
      <section>
        <h3>What to Support</h3>
        <p className="button-bar">
          <button type="button" onClick={() => setFlavor("Chocolate")} disabled={flavor === "Chocolate"}>Chocolate</button>
          <button type="button" onClick={() => setFlavor("Vanilla")} disabled={flavor === "Vanilla"}>Vanilla</button>
          <button type="button" onClick={() => setFlavor("Strawberry")} disabled={flavor === "Strawberry"}>Strawberry</button>
        </p>
      </section>
      <section>
        <h3>Color Theme</h3>
        <p className="button-bar">
          <button type="button" onClick={() => setDarkTheme(false)} disabled={!darkTheme}>Light</button>
          <button type="button" onClick={() => setDarkTheme(true)} disabled={darkTheme}>Dark</button>
        </p>
      </section>
      <section>
        <h3>Font Size</h3>
        <p className="button-bar">
          <button type="button" onClick={() => setFontSize(prevSize => prevSize - 2)}>Down</button>
          <span className="AdDesigner__fontSize">{fontSize}</span>
          <button type="button" onClick={() => setFontSize(prevSize => prevSize + 2)}>Up</button>
        </p>
      </section>
    </div>
  )
}

export default AdDesigner