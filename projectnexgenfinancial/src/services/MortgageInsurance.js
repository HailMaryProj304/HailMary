import React from "react";
import '../CSS/style.css';
import {Link} from "react-router-dom";

function MortgageInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{textAlign:'center'}}>Mortgage Insurance</h1>
      <br></br>
      <p>
        Generally the largest debt we have in life is our mortgage. Insuring this liability is one of the cornerstones of financial planning. Proper insurance planning guarantees that our families will not be saddled with the financial responsibility of a mortgage or other debt in the event of your death or disability.
        Traditionally mortgage life insurance is offered by the lenders. While it DOES offer protection, it may not always be the best option on a long term basis.
      </p>
      <br></br>
      <b>DID YOU KNOW:</b>
      <p>
        <ul>
          <li>Commonly, the traditional mortgage insurance premium will remain unchanged over the term of your mortgage while the actual coverage reduces as you pay off your mortgage</li>
          <li>Typical mortgage life insurance leaves no monies to your surviving dependents</li>
        </ul>
        While paying off the mortgage in the event of your death is important, it is even more important to ensure that funds are available to continue to provide monies for the necessities of life for any dependents, or simply for legal and burial costs. Standard mortgage insurance simply does not fulfill all the needs of most individuals and families.      </p>
      <br></br>
      <a><Link to="/services" className="button w-inline-block">Back</Link></a>
    </div>
  );
}

export default MortgageInsurance;
