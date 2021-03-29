import React from 'react';
import axios from 'axios';

export default function ClientList() {
    var clientList;
    axios.get("http://localhost:8080/clients/allClients")
    .then((response) => {
        clientList = response.data;
        const clientList = JSON.parse(clientList);
        console.log(clientList);
    })
    return (
        <div>
           {/* <table>
          <tbody>
            <tr>
              <th>First name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              </tr>
            {clientList.map(item => (

              <tr key={item.client_id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        </div>
    )
}
