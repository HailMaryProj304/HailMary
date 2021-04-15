import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function DisabilityInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Disability Insurance</h1>
      <br></br>
      <p>
        Disability insurance replaces a portion of your monthly income if you
        are injured or ill and cannot work for an extended period of time.
      </p>
      <br></br>
      <p><strong>
        This coverage is arguably the single most important insurance you can
        have. Why?</strong>
      </p>
      <br></br>
      <p>
        People under 65 years of age are twice as likely to become disabled
        long-term, than to die due to accident or illness.
      </p>
      <br></br>
      <p><strong>Approximately 48% of all foreclosures are due to a disability.</strong></p>
      <br></br>
      <p>
        Your chances of becoming disabled:
        <ul>
          <li>3 in 100 children up to 14 years of age become disabled</li>
          <li>4 in 100 young adults between 15 to 24 become disabled</li>
          <li>7 in 100 adults between 25 to 44 become disabled</li>
          <li>17 in 100 adults between 45 to 64 become disabled</li>
          <li>40 in 100 adults 65 and over become disabled</li>
          <li>53 in 100 adults over 75 reported disability</li>
        </ul>
        (Source: Statcan)
        <br></br>
        In 2006, 4.4 million Canadians living in households reported having an
        activity limitation, yielding a disability rate of 14.3%.
      </p>
      <br></br>
      <p style={{ textAlign: "left" }}>
        <strong>
          So the statistics tell the story. 24 out of 100 people between ages 25
          & 64 will face a disability period in their working lives... Nearly 1
          in 4!!
          <br />
          <br></br>
          The CPP Disability maximum payout for 2011 is $1,153.37 per month. The
          average payout is $822.32. (Source: Service Canada)
          <br />
          <br></br>
          This of course assumes that you qualify for disability.
        </strong>
      </p>
      <br></br>
      <br></br>
      <b>Are you and your family properly protected?</b>
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

export default DisabilityInsurance;
