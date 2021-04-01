import axios from "axios";
import React, { useState } from "react";
import "../CSS/style.css";

function Contact() {
  const [emailDetails, setEmailDetails] = useState({
    email: "", name: "", topic: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Test" + emailDetails.topic + emailDetails.name + emailDetails.from)
    axios.post("http://localhost:8080/clients/sendEmail", emailDetails)
  }
  return (
    <div className="container" style={{ marginTop: "5vh" }}>
      <div className="Contact-Header">
        <p>
          <b>Phone:</b> 403-264-6690 | <b>Toll Free:</b> 1-866-767-6690 |{" "}
          <b>Fax:</b> 403-398-0224
        </p>
      </div>
      <form className="Contact-Form" onSubmit={submitHandler}>
        <h2 htmlFor="Contact Details" style={{textAlign:"center"}}>Contact Details</h2>
        <div className="form-center">
          <p>Name:</p>
          <input type="text" className="form-control" required onChange={(e) => setEmailDetails({...emailDetails, name: e.target.value}) } value={emailDetails.name}/>
        </div>
        <div className="form-center">
          <p>Email:</p>
          <input type="text" className="form-control" required onChange={(e) => setEmailDetails({...emailDetails, from: e.target.value}) } value={emailDetails.from}/>
        </div>
        <h2 className="form-center" htmlFor="consultation" style={{marginBottom:'2rem'}}>Request a Consultation</h2>
<<<<<<< HEAD
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
=======
        <select
                 name="topic"
                 id="topic"
                 className="select-item"
                required onChange={(e) => setEmailDetails({...emailDetails, topic: e.target.value}) } value={emailDetails.topic}>
                <option selected=""> </option>
                <option value="Personal Insurance">Personal Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
                <option value="Policy Review">Policy Review</option>
                <option value="Group Insurance">Group Insurance</option>
                <option value="I need to make a policy change">I need to make a policy change</option>
                <option value="Other">Other</option>
              </select>
        <input type="submit" className="button" value="Send Email"></input>
      </form>
>>>>>>> 51382275f49f5e577fc3ad642190f8c1763d515f
    </div>
  );
}

export default Contact;
