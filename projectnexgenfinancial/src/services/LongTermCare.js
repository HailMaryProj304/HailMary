import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function LongTermCare() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Term & Permanent Life Insurance</h1>
      <br></br>
      <p>
        <strong>
        An injury or illness can happen to you at any time. More than one out of
        every ten people who has received income from their long term care
        insurance was under age 50 at the time of their claim.
        </strong>
      </p>
      <br></br>
      <p>
        Long Term Care Insurance pays an income benefit if the insured person is
        dependent and needs someone to assist them with two or more of the
        activities of daily living (bathing, dressing, feeding, toileting,
        transferring) or requires supervision because of deteriorating mental
        ability. A wide variety of illnesses and accidents can cause you to need
        this kind of care.{" "}
      </p>
      <br></br>
      <p>
        The most common reasons for dependency resulting in payment of long term
        care claims are:
        <ul>
          <li>37% - Injury</li>
          <li>26% - Cancer</li>
          <li>10% - Surgery</li>
          <li>8% - Other</li>
          <li>6% - Stroke</li>
          <li>6% - Deteriorating Mental Ability</li>
          <li>4% - Multiple Cause</li>
          <li>3% - Cardiovascular</li>
        </ul>
      </p>
      <br></br>
      <b>This benefit is available on either an individual or group basis.</b>
      <br></br>
      <a>
        <Link
          to="/services"
          className="button w-inline-block"
          style={{ marginTop: "1rem", marginBottom: "3rem" }}
        >
          Back
        </Link>
      </a>
    </div>
  );
}

export default LongTermCare;
