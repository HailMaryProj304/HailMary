import { useEffect, React } from "react";
import RegisterAdmin from "./RegisterAdmin";
import ClientList from "./ClientList";

import Icon from "../CSS/Icon.png";
import { useHistory, Link } from "react-router-dom";
import '../CSS/style.css';


function AdminPage() {
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }
  const getUser= async () => {
    try {
          if(!localStorage.getItem('type'))
              {
                redirect();
              }
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
   
    getUser();
  }, []);

        return (
           <div className="adminPage" >
             <Link to="/RegisterAdmin" className="adminLinks">
              <img src={Icon} width="50px"></img>
              <h3>Register Admin</h3>
              Register new admin users. <br />
            </Link>

            <Link to="/ClientList" className="adminLinks">
              <img src={Icon} width="50px"></img>
              <h3>List all clients</h3>
              List all clients in the database <br />
            </Link>
          </div>
        );   
}

export default AdminPage;
