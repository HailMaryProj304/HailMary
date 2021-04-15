import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";

var test = "NOT WORKING";

function SearchedClientList() {
  
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

  const [buttonOption, setButtonOption] = useState({
    button: "",
  });
  //separating state variables made it work
  const [searchTerm, setSearchTerm] = useState({
    searchTerm: ""
  });
  //Delete A client
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

  function updateSummary() {
    console.log("added summary?");
    axios.post("http://localhost:8080/summary/RegisterSummary/", URL);
  }

  //Search for a user by email
  const getUserByEmail = async (email) => {
    if(email !== "" && email.length > 0) {
      const response = await Axios("http://localhost:8080/clients/clientemail/" + email);
      if(response.data.length > 0 && response.data) {
        setResult(response.data);
      }
      else {
        setResult("Error");
        console.log(result);
      }
    }
    else {
      setResult("Error");
      console.log(result);
    }
  };

  //Search users by lastname
  const getUsersByLastName = async (lastname) => {
    if(lastname !== "" && lastname.length > 0) {
      const response = await Axios("http://localhost:8080/clients/clientsbylastname/" + lastname);
      if(response.data.length > 0 && response.data) {
        setResult(response.data);
      }
      else {
        setResult("Error");
      }
    }
    else {
      setResult("Error");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const searchClients = async e => {
     if(buttonOption.button === "email") {
      getUserByEmail(searchTerm.searchTerm);
     }
     if(buttonOption.button === "lastName") {
       getUsersByLastName(searchTerm.searchTerm)
     }
  }

    return (
  <div>
    <form onSubmit={searchClients}>
      <h3>Search for Clients</h3>
       <input type="text" placeholder="Search..."
      className='form-control'
      value={searchTerm.searchTerm}
      onChange={(e) =>
        setSearchTerm({ searchTerm: e.target.value })
      }></input>
      
      <button onClick={() => (setButtonOption({button: "email", clicked: true}))}
      type="submit">Search by Email</button>
      <button onClick={() => (setButtonOption({button: "lastName", clicked: true}))}
      type="submit">Search by Lastname</button>
    </form>
        <form>
          <table>
              <tbody>
                <tr>
                  <th>Client Name</th>
                  <th>Client Email</th>
                  <th>Delete Client</th>
                  <th>View Policies</th>
                  <th>Add a Policy</th>
                  <th>Insert Summary</th>
                  <th>Submit</th>
                </tr>
                {(result === "Error") ? (
               <tr><h2>No Clients Found</h2></tr>
            ):
              (result.map(client => (
                <tr>
                <td key={client.client_id}>{client.first_name + " " +  client.last_name}</td>
                <td>{client.email}</td>
                <td><button onClick={(e) => deleteClient(client, e)}>Delete Client</button></td>
                <td><Link to = {{
                  pathname: "/AdminPolicyList",
                  state: {email: client.email}
                }}><button>View Policies</button></Link></td>
                <td><Link to = {{
                  pathname: "/AdminCreatePolicy",
                  state: {client: client}
                }}><button>Create Policy</button></Link></td>
                <td><input 
                  type="text" 
                  onChange={(e) => updatePath(client, e)}
                  style={{ width: "200px" }}
                  />
                  </td>
                <td><input 
                type="button" 
                value="Update Summary" 
                onClick={(e) => updateSummary(e)}
                style={{ width: "200px" }}
                />
                </td>
            </tr>)))}
            </tbody>
          </table>
        </form>     
        </div>
    )
}

export default SearchedClientList;
