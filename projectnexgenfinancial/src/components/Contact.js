import React from "react";
import "../CSS/style.css";

function Contact() {
  return (
    <div className="container" style={{ marginTop: "5vh" }}>
      <div className="Contact-Header">
        <p>
          <b>Phone:</b> 403-264-6690 | <b>Toll Free:</b> 1-866-767-6690 |{" "}
          <b>Fax:</b> 403-398-0224
        </p>
      </div>
      <div className="Contact-Form">
        <h2 htmlFor="Contact Details" style={{textAlign:"center"}}>Contact Details</h2>
        <div className="form-center">
          <p>Name:</p>
          <input type="text" className="form-control" />
        </div>
        <div className="form-center">
          <p>Email:</p>
          <input type="text" className="form-control" />
        </div>
        <h2 className="form-center" htmlFor="consultation" style={{marginBottom:'2rem'}}>Request a Consultation</h2>
        <div className="contactForm">
        <div className="consultation-checkboxes form-center">
          <p>Personal Insurance</p>
          <input
            className="checkbox"
            type="checkbox"
            name="personal insurance"
            id="personalInsurance"
          />{" "}
        </div>
        <div className="consultation-checkboxes form-center">
          Business Insurance
          <input
            className="checkbox"
            type="checkbox"
            name="Business Insurance"
            id="businessInsurance"
          />{" "}
        </div>
        <div className="consultation-checkboxes form-center">
          Policy Review
          <input
            className="checkbox"
            type="checkbox"
            name="policy Review"
            id="policyReview"
          />{" "}
        </div>
        <div className="consultation-checkboxes form-center">
          Group Insurance
          <input
            className="checkbox"
            type="checkbox"
            name="Group Insurance"
            id="Group Insurance"
          />{" "}
        </div>
        <div className="consultation-checkboxes form-center">
          I need to make a policy change
          <input
            className="checkbox"
            type="checkbox"
            name="policy change"
            id="policyChange"
          />{" "}
        </div>
        <div className="consultation-checkboxes form-center">
          Other
          <input className="checkbox" type="checkbox" name="Other" id="other" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
