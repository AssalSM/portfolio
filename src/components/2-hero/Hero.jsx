import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="flex hero">
      <div className="left-section ">
        <div className="parent-avedar flex">
          <img src="./wew.jpeg" className="avetar" alt="me" />
          <div>
            <i className="material-icons-outlined verified">verified</i>{" "}
          </div>
        </div>
        <h1 className="title">Software designer, founder, and amateur astronaut.</h1>
        <p className="sub-title">
          I’m assal, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="icons flex">
        <div className="icon">
        <i className="material-icons-outlined">facebook</i>
         </div>
       
        <div className="icon">
        <i className="material-icons-outlined">linkedin</i>
        </div>

        </div>
      </div>
      <div className="right-section  animation"><img src="./5.jpeg" alt="hello world" /></div>
    </section>
  );
};

export default Hero;
