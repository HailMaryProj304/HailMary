import React from "react";
import RegisterAdmin from "./RegisterAdmin";
import ClientList from "./ClientList";

import Icon from "../CSS/Icon.png";
import { Link } from "react-router-dom";
import '../CSS/style.css';


function AdminPage() {
        return (
           <div>
             <Link to="/RegisterAdmin" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Register Admin</h3>
              Register new admin users. <br />
            </Link>

            <Link to="/ClientList" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>List all clients</h3>
              List all clients in the database <br />
            </Link>
          </div>
        );   
}

export default AdminPage;
