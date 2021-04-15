import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function KeyManInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Key Man Insurance</h1>
      <br></br>
      <p>
        <strong>
          Key Man, also commonly called key person or keyman coverage, is an
          important form of business insurance.
        </strong>
      </p>
      <br></br>
      <p>
        Generally key person insurance would come in the form of Term Life
        insurance or Disability insurance and would be owned and paid for by the
        company.
      </p>
      <br></br>
      <p>
        <strong>How do you know if you need Key Man insurance?</strong>
      </p>
      <br></br>
      <p>
        Here are some important things to note:
        <ul>
          <li>
            There is no legal definition for "key man insurance". In general, it
            can be described as an insurance policy taken out by a business to
            compensate that business for financial losses that would arise from
            the death or extended incapacity of the member of the business
            specified on the policy.
          </li>
          <li>
            The policy's term does not extend beyond the period of the key
            person's usefulness to the business.
          </li>
          <li>
            The aim is to compensate the business for losses and facilitate
            business continuity.
          </li>
          <li>
            Key person insurance does not indemnify the actual losses incurred
            but compensates with a fixed monetary sum as specified in the
            insurance policy.
          </li>
          <li>
            An employer may take out a key person insurance policy on the life
            or health of any employee whose knowledge, work, or overall
            contribution is considered uniquely valuable to the company.
          </li>
          <li>
            The employer does this to offset the costs (such as hiring temporary
            help or recruiting a successor) and losses (such as a decreased
            ability to transact business until successors are trained) which the
            employer is likely to suffer in the event of the loss of a key
            person.
          </li>
        </ul>
      </p>
      <br></br>
      <p>
        <strong>Is your business protected if you lose a Key Person?</strong>
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

export default KeyManInsurance;
