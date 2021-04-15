import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function HealthInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>
        Health, Dental & Medical Access Insurance
      </h1>
      <br></br>
      <p>
        When you think about insurance on PEOPLE, you'll likely think of health
        and dental care. In Canada, provincial health care plans cover some of
        your needs, but fall short on many of the most common requirements that
        you and your family may have.
      </p>
      <br></br>
      <p>
        <strong>
          Some of the items that your provincial plan may lack could include:
        </strong>
      </p>
      <p>
        <ul>
          <li>Dental care</li>
          <li>Prescription drug coverage</li>
          <li>
            Medical equipment coverage (i.e. orthotics, oxygen, leg braces,
            etc.)
          </li>
          <li>
            Paramedical coverage (massage, chiropractic, acupuncture,
            psychologists, etc.)
          </li>
          <li>Emergency Out of Country Medical coverage</li>
        </ul>
      </p>
      <br></br>
      <b>
        The BAD news is that it's a HUGE task to sort through the many options
        out there to choose from!
      </b>
      <p>
        <ul>
          <li>
            Do you need a basic plan that simply covers you while in Canada?
          </li>
          <li>
            Do you require something that can safeguard your health even if you
            travel frequently as part of your business?
          </li>
          <li>Maybe a combination of services is what you need.</li>
          <li>
            How can you be certain that you are getting the coverage that best
            suits YOUR needs?
          </li>
        </ul>
      </p>
      <br></br>
      <b>
        The GOOD news is that Nexgen regularly reviews the marketplace offerings
        so that we can help to match you with the best solution for your
        specific needs and budget.
      </b>
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

export default HealthInsurance;
