import React from "react";
import '../CSS/style.css';
import {Link} from "react-router-dom";

function LifeInsurance() {
  return (
    <div className="BodyText">
      <h1 style={{textAlign:'center'}}>Term & Permanent Life Insurance</h1>
      <br></br>
      <p>
        Life insurance is simply a product that provides cash to a family or business in the event of a death. 
        The whole basis of life insurance is establishing how much is required and for how long.
      </p>
      <br></br>
      <b>Example:</b>
      <p>
        <ul>
          <li>A young family with two children ages 2 & 4 years</li>
          <li>Single income family - one parent stays at home to care for children</li>
          <li>Household income of $100,000 per year</li>
          <li>Mortgage & credit card debt of $400,000</li>
        </ul>
      In this example, we would recommend insurance adequate to eliminate the debt, and replace the household income for a period of 10-20 years. In addition, it would prudent to have sufficient coverage on the care-giver as well.
      </p>
      <br></br>
      <b>Why would you need to have insurance on a caregiver?</b>
      <p>
        <ul>
          <li>To provide funding for a child care provider in the event of the death of the major care giver</li>
          <li>Major income earner would likely have to take time away from work, thus reducing the income potential for a period of time</li>
          <li>Reduce financial stress on surviving partner</li>
        </ul>
      </p>
      <br></br>
      <b>So, how long do I need life insurance for?</b>
      <p>
        You would need insurance for as long as there is financial dependency. Financial dependency is defined as, "an individual or family that is reliant on you for income and would suffer a financial loss in the event of your death." For example, the financial dependency period for a child is roughly 20 years from birth. Financial dependency if you have a 30 year mortgage would be 30 years.
      </p>
      <br></br>
      <a><Link to="/services" className="button w-inline-block">Back</Link></a>
    </div>
  );
}

export default LifeInsurance;
