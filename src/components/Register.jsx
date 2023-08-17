import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `http://127.0.0.1:8000/api/v1/register`; // Replace 'your-api-url' with the actual API endpoint
      
      
    axios.post(apiUrl, {
        name:name,
        email:email,
        password:password,
      })
      
      .then(response => {
        navigate('/login');
          //setResponseData(response.data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
