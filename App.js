import React, { useState } from "react";
import {nanoid} from 'nanoid';
import "./App.css";
import data from './data.json';
import Header from './Components/Header';
import DatePicker from 'react-datepicker';
import Table from './Components/Table';


import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 

   const App = () => {

    
      const [contacts, setContacts] = useState(data);
      const [startDate, setStartDate] = useState(new Date());
      const [addFromData, setAddFormData] = useState({
        fullName:'',
        Age:'',
        Gender:'',
        DOB: '',
        PhoneNumber:'',
        Email:'', 
      });

      const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFromData};
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };
      const handleAddFormSubmit = (event) => {
        event.preventDefault();


      const newContact = {
        id: nanoid(),
        fullName: addFromData.fullName,
        Age: addFromData.Age,
        Gender: addFromData.Gender,
        DOB: addFromData.DOB,
        PhoneNumber: addFromData.PhoneNumber,
        Email: addFromData.Email,
      };
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);

     };
     
  return (
    <div className="app-container">
      <Header />
      <Table />
      <validateInfo />
      <br></br>
      <form onSubmit={handleAddFormSubmit}>
      <fieldset>  
      <label>
      <h6>Name :</h6>
         <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter your Name..."
          onChange={handleAddFormChange}
          />
          </label>
          </fieldset>
          <br></br>
          <fieldset>
          <label>
          <h6>Age :</h6>
           <input
          type="number"
          name="Age"
          required="required"
          placeholder="Enter your  Age..."
          onChange={handleAddFormChange}
          step="1"
          /></label></fieldset>
          <fieldset>
          <label>
          <h6>Gender :</h6>
          <select name ="Gender"
          type="text"
          required="required"
          placeholder="Enter your Gender..."
          onChange={handleAddFormChange}> 
          <option value="">--Please Select Your Gender--</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Others">Others</option>
               </select>
          </label></fieldset>
          <fieldset>
          <label>
          <h6>DOB :</h6>
          <DatePicker
          name="DOB"
          selected={startDate}  
          onChange={(date) => setStartDate(date)}
          onClickOutside={handleAddFormChange}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          timeInputLabel="Time :"
          isClearable
          showTimeInput
          showYearDropdown
          scrollableMonthYearDropdown
          /></label></fieldset>
          <fieldset>
          <label>
          <h6>PhoneNumber :</h6>
          <input
          type="text"
          name="PhoneNumber"
          required="required"
          placeholder="Enter your Phone Number..."
          onChange={handleAddFormChange}
          /></label></fieldset>
          <fieldset>
          <label>
          <h6>Email :</h6>
          <input
          type="text"
          name="Email"
          required="required"
          placeholder="Enter your Email..."
          onChange={handleAddFormChange}
          /></label></fieldset>
          <br></br>
          <label>
           <h6>Terms and conditions</h6>
           <input type="checkbox" name="Terms and conditions" onChange={handleAddFormChange} />
         </label>
          <button type = "submit">Submit</button>
          <br></br>
          <br></br>
      </form>
      <br></br>
      </div>
      
  );
}

      export default App;

