import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar';


const Primaryinfo = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [about, setAbout] = useState('');
    const [college, setCollege] = useState('');
    const [rltn, setRltn] = useState('');
    const myId=localStorage.getItem('userId');
    let val=myId+1;
    console.log('my id ====='+myId);
    const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `http://127.0.0.1:8000/api/v1/Userss/`; // Replace 'your-api-url' with the actual API endpoint
      
    let data={
        user_name:name,
        about:about,
        myId:myId,
        digit:myId,
        city:city,
        college:college,
        rltn:rltn,
       
      }
      console.log(data)
    axios.post(apiUrl, data)
      
      .then(response => {
        console.log(response);
        //navigate('/login');
          //setResponseData(response.data);
      })
      .catch(error => {
          console.log('huihui');
          console.error('Error:', error);
      });
    }
  return (
    <div>
        <Navbar1/>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="city" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        About:
        <input type="about" value={about} onChange={(e) => setAbout(e.target.value)} />
      </label>
      <br />
      <label>
        College:
        <input type="about" value={college} onChange={(e) => setCollege(e.target.value)} />
      </label>

      <br />
      <label>
        Relationship Status:
        <input type="about" value={rltn} onChange={(e) => setRltn(e.target.value)} />
      </label>
      <button type="submit">Update profile</button>
    </form>
    </div>
  );
};

export default Primaryinfo;
