import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from './Navbar';
import './style.css';
import Button from 'react-bootstrap/esm/Button';
import ApiButton from './ApiButton';

function Locals() {
  const userId = localStorage.getItem('userId');
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/Userss/')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(details[0]);
  return (
    <div>
        <Navbar1/>
      <p>your user id/self id = {userId}</p>
      <hr />
      {details.map((output, id) => (
        <div key={id} className='people'>
          <div>
            <h2>{output.user_name}</h2>
            <h4>{output.about}</h4>
            <h4>{output.city}</h4>
            <h4>{output.college}</h4>
            <h4>{output.rltn}</h4>
            <h4>{output.digit}</h4>
          </div>
          
          <ApiButton friendId={output.digit}/>
        </div>
      ))}
    </div>
  );
}

export default Locals;
