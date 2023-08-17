import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `http://127.0.0.1:8000/api/v1/login`; // Replace 'your-api-url' with the actual API endpoint

    axios
      .post(apiUrl, {
        email: email,
        password: password,
      })

      .then((response) => {
        console.log(response.data);
        navigate('/locals');
        const userId = response.data.id;
        console.log("current user id = "+ userId)
      // Store the user ID in localStorage
      localStorage.setItem('userId', userId);
        //setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


      

  
        // Store the user ID in localStorage
        //localStorage.setItem('userId', userId);
  
        // Redirect or perform other actions after successful login
       
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <a href="register">Not registered yet? Register here</a>
    </form>
  );
};

export default Login;
