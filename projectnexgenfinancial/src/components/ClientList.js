import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import Register from './Register';

var test = "NOT WORKING";

function ClientList() {
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push("/");
  };
  const getUser = async () => {
    try {
      if (!localStorage.getItem("user")) {
        redirect();
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const [result, setResult] = useState([]);
  const [URL, setURL] = useState({
    summary_id: "",
    client: "",
    path: "",
  });

  function deleteClient(client, e) {
    e.preventDefault();
    console.log(client);
    axios.put("http://localhost:8080/clients/delete", client);
    window.location.reload();
  }

  function updatePath(client, e) {
    e.preventDefault();
    setURL({
      summary_id: client.client_id,
      client: client,
      path: e.target.value,
    });
  }

  function changeClient(client, e) {
    e.preventDefault();
  }
  function updateSummary() {
    console.log("added summary?");
    axios.post("http://localhost:8080/summary/RegisterSummary/", URL);
  }

  const getUsers = async () => {
    const response = await Axios("http://localhost:8080/clients/allClients");
    setResult(response.data);
    //console.log(list)
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  useEffect(() => {
    getUsers();
  }, []);

    return (
  <div>
        <form style={{marginTop:"50px"}}>
          <table>
            <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Client Email</th>
                  <th>Delete Client</th>
                  <th>Change Client Details</th>
                  <th>View Policies</th>
                  <th>Create Policy</th>
                  <th>Insert Summary</th>
                  <th>Submit</th>
                </tr>
               </thead> 
              <tbody>
              {result.map(client => (
                <tr>
                <td key={client.client_id} className="clientTable">{client.first_name + " " +  client.last_name}</td>
                <td className="clientTable">{client.email}</td>
                <td className="clientTable"><button onClick={(e) => deleteClient(client, e)} className="tableButton2">Delete Client</button></td>
                <td className="clientTable"><button
                  type="button"
                  onClick={() => {
                    history.push({
                      pathname: "/ChangeClient",
                      state: {
                      client_id: client.client_id,
                      email: client.email,
                      first_name: client.first_name,
                      last_name: client.last_name,
                      dob: client.dob,
                      phone_number: client.phone_number,
                      street_address: client.street_address,
                      prov: client.prov,
                      country: client.country,
                      postal_code: client.postal_code,
                      password: client.password
                    }
                    });
                    localStorage.removeItem("clientChange");
                  }}
                  className="tableButton1"
                >
                 Change Client
                </button></td>
                <td className="clientTable"><Link to = {{
                  pathname: "/AdminPolicyList",
                  state: {email: client.email}
                }}><button className="tableButton1">View Policies</button></Link></td>
                <td className="clientTable"><Link to = {{
                  pathname: "/AdminCreatePolicy",
                  state: {client: client}
                }}><button className="tableButton1">Create Policy</button></Link></td>
                <td className="clientTable"><input 
                  type="text" 
                  onChange={(e) => updatePath(client, e)}
                  style={{ width: "auto" }}
                  />
                  </td>
                <td className="clientTable"><input 
                type="button" 
                value="Update Summary" 
                onClick={(e) => updateSummary(e)}
                style={{ width: "200px", cursor:"pointer"}}
                />
                </td>
            </tr>))}
            </tbody>
          </table>
        </form> 
        
        <a><Link to="/register" className="button reg-button" style={{backgroundColor:"transparent", border:"2px solid #e85a4f", color:"red", marginTop:"1rem"}}>Create a new Client</Link></a>    
        </div>
    )
}
export default ClientList;
