import React, { useState } from "react";
import "./Table.css";
import Data from './data.json';

const Table = () => {

  const [contacts, setContacts] = useState(Data);
  const newContacts = [...contacts];
      setContacts(newContacts);
    return (
      
    <div className = "Table">
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              </tr>
        </thead>
        <tbody>
        {contacts.map((contact) =>  (
             <tr>
               <td>{contact.fullName}</td>
               <td>{contact.Age}</td>
               <td>{contact.Gender}</td>
               <td>{contact.DOB}</td>
               <td>{contact.PhoneNumber}</td>
               <td>{contact.Email}</td>
               </tr>
            ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default Table;	
