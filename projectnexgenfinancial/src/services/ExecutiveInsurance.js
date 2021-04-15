import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function ExecutiveInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Executive Benefit Packages</h1>
      <br></br>
      <p>
        <strong>
          Business Owners & Executives have unique insurance needs. As key
          people in the company, managing YOUR risks is essential to the success
          of the business. Some of the coverage options that may be specific to
          an owner or executive class could include a combination of traditional
          & non-traditional benefits such as:
        </strong>
        <ul>
          <li>Group Disability Top-up</li>
          <li>Personal Spending Account</li>
          <li>Medical Second Opinion Services</li>
          <li>International Life, Disability, Health & Dental Benefits</li>
          <li>Health Assessment & Management Services</li>
          <li>Private Health Services Plan (PHSP)/Cost Plus)</li>
          <li>Diagnostics & Specialist Access Insurance (DSAI)</li>
          <li>Partners Life coverage (Buy/Sell Insurance)</li>
          <li>Key Man Insurance</li>
          <li>Personal Life & Disability coverage</li>
          <li>Critical Illness insurance</li>
          <li>Long Term Care insurance</li>
        </ul>
      </p>
      <br></br>
      <p>
        <strong>Our goals & priorities include:</strong>
        <ul>
          <li>Protecting your personal, family and business interests</li>
          <li>Providing solutions that provide maximum tax benefit</li>
          <li>
            Connecting owners and executives with our network of business and
            service specialists
          </li>
        </ul>
      </p>
      <a>
        <Link
          to="/services"
          className="button w-inline-block"
          style={{ marginBottom: "3rem", marginTop: "3rem" }}
        >
          Back
        </Link>
      </a>
    </div>
  );
}

export default ExecutiveInsurance;
