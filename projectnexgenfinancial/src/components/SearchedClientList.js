import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import "../CSS/style.css";

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
    searchTerm: "",
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

  function updateSummary(e) {
    e.preventDefault();
    console.log("added summary?");
    axios.post("http://localhost:8080/summary/RegisterSummary/", URL);
  }

  //Search for a user by email
  const getUserByEmail = async (email) => {
    if (email !== "" && email.length > 0) {
      const response = await Axios(
        "http://localhost:8080/clients/clientemail/" + email
      );
      if (response.data.length > 0 && response.data) {
        setResult(response.data);
      } else {
        setResult("Error");
        console.log(result);
      }
    } else {
      setResult("Error");
      console.log(result);
    }
  };

  //Search users by lastname
  const getUsersByLastName = async (lastname) => {
    if (lastname !== "" && lastname.length > 0) {
      const response = await Axios(
        "http://localhost:8080/clients/clientsbylastname/" + lastname
      );
      if (response.data.length > 0 && response.data) {
        setResult(response.data);
      } else {
        setResult("Error");
      }
    } else {
      setResult("Error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const searchClients = async (e) => {
    e.preventDefault();
    if (buttonOption.button === "email") {
      getUserByEmail(searchTerm.searchTerm);
    }
    if (buttonOption.button === "lastName") {
      getUsersByLastName(searchTerm.searchTerm);
    }
  };

  return (
    <div>
      <form onSubmit={searchClients} className="searchForm">
        <h3 className="searchFunction searchTitle">Search for Clients</h3>
        <input
          type="text"
          placeholder="Search..."
          className="form-control searchFunction"
          value={searchTerm.searchTerm}
          onChange={(e) => setSearchTerm({ searchTerm: e.target.value })}
        ></input>

        <button
          onClick={() => setButtonOption({ button: "email", clicked: true })}
          type="submit"
          className="tableButton1 searchFunction"
        >
          Search by Email
        </button>
        <button
          onClick={() => setButtonOption({ button: "lastName", clicked: true })}
          type="submit"
          className="tableButton1 searchFunction  "
        >
          Search by Last Name
        </button>
      </form>
      <form>
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Delete Client</th>
              <th>View Policies</th>
              <th>Add a Policy</th>
              <th>Insert Summary</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {result === "Error" ? (
              <tr>
                <h2>No Clients Found</h2>
              </tr>
            ) : (
              result.map((client) => (
                <tr>
                  <td key={client.client_id} className="searchTable">
                    {client.first_name + " " + client.last_name}
                  </td>
                  <td className="searchTable">{client.email}</td>
                  <td className="searchTable">
                    <button
                      onClick={(e) => deleteClient(client, e)}
                      className="tableButton2"
                    >
                      Delete Client
                    </button>
                  </td>
                  <td className="searchTable">
                    <Link
                      to={{
                        pathname: "/AdminPolicyList",
                        state: { email: client.email },
                      }}
                    >
                      <button className="tableButton1">View Policies</button>
                    </Link>
                  </td>
                  <td className="searchTable">
                    <Link
                      to={{
                        pathname: "/AdminCreatePolicy",
                        state: { client: client },
                      }}
                    >
                      <button className="tableButton1">Create Policy</button>
                    </Link>
                  </td>
                  <td className="searchTable">
                    <input
                      type="text"
                      onChange={(e) => updatePath(client, e)}
                      style={{ width: "auto" }}
                    />
                  </td>
                  <td className="searchTable">
                    <input
                      type="button"
                      value="Update Summary"
                      onClick={(e) => updateSummary(e)}
                      style={{ width: "200px" }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default SearchedClientList;
