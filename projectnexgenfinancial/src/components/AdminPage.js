import React, {useState} from 'react';
import axios from "axios";

function AdminPage() {
    function clientList() {
        axios.get("http://localhost:8080/clients")
        .then((response) => {
            const listClients = response.data;
            console.log(listClients[0].first_name)
            return listClients
        })
      }
        return (
            <div>
                <h1>Admin Page</h1>
                <p style="color:pink;">TEST</p>
                {
                    clientList.map(clients => <h2>{clients}</h2>)
                }
            </div>
        )
    
}

export default AdminPage;
