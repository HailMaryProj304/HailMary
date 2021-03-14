import React from "react";
import './CSS/style.css';

function About() {
  return (
    <div className="BodyText">
      <h1 style={{textAlign:'center'}}>NexGen Financial</h1>
      <h2>Our Approach is as unique as your needs are</h2>
      <p>
        At Nexgen we have a truly individual approach to insurance. We believe
        in taking a comprehensive and multi-generational view of the needs of
        groups & individuals. We take the time to fully understand your short
        and long-term objectives so we can successfully advise you and develop
        personalized solutions. The Nexgen Team works with a wide array of
        products & providers in order to find just the right fit for YOU!
      </p>
      <h2>Let the experts at NexGen point you in the right direction.</h2>
      <p>
        Risk management is nothing more than identifying the risks that we face
        in life and determining how best to insure against the economic
        consequences of those risks. We specialize in finding ways to insure
        PEOPLE. "Stuff happens", and being properly insured for the possibility
        that it could happen to YOU, can be the difference between recovery and
        catastrophe. We assist people in providing financial support when they
        need it most.
      </p>
    </div>
  );
}

export default About;
