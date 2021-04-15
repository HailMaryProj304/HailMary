import React from "react";
import "./CSS/style.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>NexGen Financial</h1>
      <h2>Our Approach is as unique as your needs are</h2>
      <p>
        At Nexgen we have a truly individual approach to insurance. We believe
        in taking a comprehensive and multi-generational view of the needs of
        groups & individuals.
      </p>
      <br></br>
      <p>
        We take the time to fully understand your short and long-term objectives
        so we can successfully advise you and develop personalized solutions.
      </p>
      <br></br>
      <p>
        The Nexgen Team works with a wide array of products & providers in order
        to find just the right fit for YOU!
      </p>
      <h2>Let the experts at NexGen point you in the right direction.</h2>
      <p>
        Risk management is nothing more than identifying the risks that we face
        in life and determining how best to insure against the economic
        consequences of those risks. We specialize in finding ways to insure
        PEOPLE.
      </p>
      <br></br>
      <p>
        <strong>"Stuff happens"</strong>, and being properly insured for the
        possibility that it could happen to YOU, can be the difference between
        recovery and catastrophe. We assist people in providing financial
        support when they need it most.
      </p>
      <h2>Get it right the first time.</h2>
      <p>
        Good insurance strategies help attract and retain employees, safeguard
        your assets, look after your dependents and protect your ability to earn
        an income while maximizing your pre-tax and after-tax dollars. Large or
        small, individual or group, traditional or flexible, we can review your
        existing plans and policies for you or help you design a new one that
        meets the needs of your business and your employees.
      </p>
      <h2>Ongoing support after the sale!</h2>
      <p>
        We’re with you every step of the way. From partner and employee sessions
        to liaising with your chosen insurance providers, we will work to make
        your implementation as smooth as possible. On an ongoing basis, we will
        monitor the performance of your policy or plan, help you troubleshoot,
        make changes as needed and provide you with regular updates.
      </p>
      <a>
        <Link
          to="./services"
          className="button w-inline-block"
          style={{ marginBottom: "3rem", marginTop: "3rem" }}
        >
          Get Started
        </Link>
      </a>
    </div>
  );
}

export default About;
