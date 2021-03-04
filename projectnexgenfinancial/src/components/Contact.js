import React from "react";

function Contact() {
  return (
    <div>
      <div className="Contact-Header">
        <p>
          <b>Phone:</b> 403-264-6690 | <b>Toll Free:</b> 1-866-767-6690 |<b>Fax:</b> 403-398-0224
        </p>

        <div className="Contact-Form">
            <label htmlFor="Contact Details">Contact Details</label> <br/>
            Name: <br/>
            <input type="text"/> <br/>
            Email: <br/>
            <input type="text"/> <br/>
            
            <label htmlFor="consultaton">Request a Consultation</label> <br/>
            Personal Insurance<input type="checkbox" name="personal insurance" id="personalInsurance"/> <br/>
            Business Insurance<input type="checkbox" name="Buisness Insurance" id="buisnessInsurance"/> <br/>
            Policy Review<input type="checkbox" name="policy Review" id="policyReview"/> <br/>
            Group Insurance<input type="checkbox" name="Group Insurance" id="Group Insurance"/> <br/>
            I need to make a policy change<input type="checkbox" name="policy change" id="policyChange"/> <br/>
            Other<input type="checkbox" name="Other" id="other"/>

        </div>
      </div>
    </div>
  );
}

export default Contact;
