// src/components/ApiButton.js
import React, { useState } from 'react';
import axios from 'axios';

const ApiButton = ({friendId,text}) => {
  const [selfId, setSelfId] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [status, setStatus] = useState('');
  const myId=localStorage.getItem('userId');

  const handleApiCall = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/Posts/', {
        self_id: myId,
        quote: thoughts,
      });
      setStatus('Posted successfully');
      console.log(response.data); // Handle the API response as needed
    } catch (error) {
      console.error(error);
      setStatus('Failed to post');
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Self ID"
        value={selfId}
        onChange={(e) => setSelfId(e.target.value)}
      /> */}
      <input
        type="text"
        placeholder="Write something"
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
      />
      <button onClick={handleApiCall}>Post</button>

      {status && <p>{status}</p>}
    </div>
  );
};

export default ApiButton;
