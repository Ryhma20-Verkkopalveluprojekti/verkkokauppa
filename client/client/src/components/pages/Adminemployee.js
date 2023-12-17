//NIINA HARJUN TEKEMÄ LISÄTOIMINNALLISUUS. HAKEE TYÖNTEKIJÄT TIETOKANNAN 'employee'- TAULUSTA JA NÄYTTÄÄ TIEDOT ADMIN SIVULLA.

import React, { useEffect, useState } from 'react';
import '../pages/styles/Admin.css';
import axios from 'axios';
import Logo from '../inc/logo';


function Adminemployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
   
    // Haetaan työntekijöiden tiedot tietokannasta
    axios.get('http://localhost:3001/employee')
      .then(response => {
        console.log('Employee data:', response.data); 
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching store data:', error);
      });
  }, []); 
  
  return (
    
        <div>
          <div className="page-content" style={{ minHeight: '100vh' }}>
         
            <div className="container center-text">
              <div className="row">
                <div className="col-md-10">
                  <div className="top-right"> 
                    <Logo />{/*Logo */}
                  </div>
                  <section className="section">
                    <div className="container">
                      <div className="row"> 
                        <h3>You can find list of our employees here!</h3><br/>

                        {/*Näytetään työntekijät */}

                        {employees.length > 0 ? (
                          employees.map(employee => ( 
                            <div key={employee.id} className="col-md-4 mb-4">
                              <div className="card shadow">
                                <div className="card-body">
                                  <p>First name: <br/>
                                    {employee.first_name}</p>
                                  <p>Last name: <br/>
                                    {employee.last_name}</p>
                                  <p>City: <br/>
                                    {employee.city}</p>
                                </div>
                              </div>
                              </div>
                          ))
                        ) : (
                          //virhe ilmoitus, jos työnttekijöitä ei löydy
                          <p>No employees found </p> 
                        )}
                      </div>
                    </div>
                  </section><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}


export default Adminemployee;