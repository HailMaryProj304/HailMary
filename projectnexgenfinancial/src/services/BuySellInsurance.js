import React from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

function BuySellInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{ textAlign: "center" }}>Buy/Sell Insurance</h1>
      <br></br>
      <p>
        <strong>What is "Buy/Sell Insurance"?</strong>
      </p>
      <br></br>
      <p>
        Many businesses that have multiple shareholders have gone through the
        effort and legal expense of drafting a Unanimous Shareholders Agreement.
        This is a legal agreement that is set up to define the rules and
        regulations pertaining to the sale, transfer and rights of shareholders.
        The agreement typically deals with issues like first right of refusal,
        bankruptcy, divorce or death/disability of a shareholder.
      </p>
      <br></br>
      <p>
        The death or disablement of a shareholder in a private company is a
        potential issue that is often ignored, but can have serious financial
        consequences to the business and surviving shareholders.
      </p>
      <p style={{ margin: "7px" }}>
        <ul>
          <li>
            What would happen to the individuals' shares in the company?
            <br></br>
            Would they go to the persons' spouse or to their estate?
          </li>
          <li>
            Would a disabled shareholder still expect to have his/her salary
            paid and receive a proportionate share of the companies' profits?
          </li>
          <li>
            What if the remaining shareholder(s) wanted to buy back the shares
            of the deceased or disabled shareholder?
          </li>
          <li>
            <b>
              Where is the money going to come from to buy back the
              shares...savings, bank loan, profits of the company?
            </b>
          </li>
        </ul>
      </p>
      <p>
        What is the solution? A Buy/Sell policy can assure that just such an
        occurrence does not cause legal or financial strain for your company by
        providing the necessary funds for remaining shareholder(s) to complete a
        share buy-back and/or pay out a disabled shareholder in the most cost
        effective and efficient manner.
      </p>
      <a>
        <Link
          to="/services"
          className="button w-inline-block"
          style={{ marginBottom: "3rem", marginTop:"3rem"}}
        >
          Back
        </Link>
      </a>
    </div>
  );
}

export default BuySellInsurance;
