import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function CriticalIllnessInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Critical Illness Benefits</h1>
      <br></br>
      <p>
        <strong>
        Critical illness insurance provides a one-time lump sum payout if you
        are diagnosed with a critical illness or condition as defined in your
        policy, and you satisfy the survival period. You can use the benefit to
        help pay off an outstanding loan, make bill payments while you recover,
        seek specialized medical treatments, or for any other personal or
        business needs. How you use it is up to you.{" "}
        </strong>
      </p>
      <br></br>
      <p>
        A critical illness such as a heart attack, stroke, or cancer can stretch
        your financial resources. It can delay or even prevent you from paying
        your bills, loans or mortgage as well as limit your choices with regards
        to treatment options.{" "}
      </p>
      <p>
        <ul>
          <li>
            1 in 2 men and 1 in 3 women are predicted to develop heart disease
            in their lifetime.
          </li>
          <li>
            During their lifetime, 1 in 2.3 men and 1 in 2.6 women living in
            Canada will develop cancer.
          </li>
          <li>There are 40,000 to 50,000 strokes in Canada each year! </li>
        </ul>
      </p>
      <br></br>
      <p>
        <strong>
        Do YOU know somebody who has suffered one of these or another serious
        illness?
        </strong>
      </p>
      <br></br>
      <p>
        Wouldn't it be comforting to know you have the financial resources to
        help pay off your mortgage, personal or business loan, or pursue
        expedited treatment if you became critically ill?{" "}
      </p>
      <br></br>
      <a>
        <Link
          to="/services"
          className="button w-inline-block"
          style={{ marginBottom: "3rem" }}
        >
          Back
        </Link>
      </a>
    </div>
  );
}

export default CriticalIllnessInsurance;
