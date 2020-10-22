import React from "react";
import "./App.scss";

import People from "./images/front.webp";

function App() {
  return (
    <>
      <section className="Main">
        <div className="Container">
          <>
            <div className="image-container">
              <img src={People} alt="People" />
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default App;
