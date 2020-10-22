import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin, Power2 } from "gsap/all";
import "./App.scss";

import People from "./images/front.webp";
gsap.registerPlugin(CSSRulePlugin);

function App() {
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let psedoRef = CSSRulePlugin.getRule(".image-container:after");

  let tl = gsap.timeline();

  useEffect(() => {
    console.log(psedoRef);
    tl.to(containerRef.current, {
      duration: 0,
      visibility: "visible",
    })
      .to(psedoRef, {
        duration: 1.4,
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(imageRef.current, {
        duration: 1.2,
        scale: 1.4,
        delay: -1.2,
      });
    //eslint-disable-next-line
  }, [People]);

  return (
    <>
      <section className="Main">
        <div className="Container" ref={containerRef}>
          <>
            <div className="image-container" >
              <img src={People} alt="People" ref={imageRef}/>
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default App;
