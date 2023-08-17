// src/components/DogDetails.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar1 from './Navbar';
import './style.css';
import ApiButton from './ApiButton';

const Test = () => {


  // Query friend data collection
  const [id, setId] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [posts, setPosts]=useState([]);
  const [showElements, setShowElements] = useState(false);
  const [FriendName, setFriendName] = useState('');

  const handleShowElements = () => {
    setShowElements(true);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `http://127.0.0.1:8000/api/v1/Friends/`; // Replace 'your-api-url' with the actual API endpoint
    
    const apiUrl_posts='http://127.0.0.1:8000/api/v1/Posts/';

    axios.get(apiUrl)
    .then(response => {
        setResponseData(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    axios.get(apiUrl_posts)
    .then(response => {
        setPosts(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  };

  const handleInputChange = (event) => {
        setShowElements(false);
        setId(event.target.value);
    };
    console.log(id)
  
    console.log('posts')
    console.log(posts)
  //filteredData is the friends of id=what is given in input box 
  let filteredData = responseData.filter(obj => obj.self_id === parseInt(id)).map(obj=>obj.friend_id);
  let filteredPosts = posts.filter(obj => obj.self_id === parseInt(id));
  //////////////////////////////
  console.log(filteredData)
  console.log(filteredPosts)

  const [dogsData, setDogData] = useState([]);
  const [dogId, setDogId] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/v1/Userss/${id}/`);
      const data = response.data;
      setFriendName(data.user_name);
      console.log('String from API saved in variable item:', data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  // Call the API when the component renders
  fetchData();
  

  const fetchDogData = async () => {
    try {
        const validIds = filteredData.filter(id => id !== null && id !== undefined);
    validIds.map((id) => console.log('id=' + id));

    const responses = await Promise.all(
      validIds.map((id) => axios.get(`http://127.0.0.1:8000/api/v1/Userss/${id}/`))
    );
  
        const fetchedDogsData = responses.map((response) => response.data);
        setDogData(fetchedDogsData);
        
      } catch (error) {
        console.error(error);
        setDogData([]);
      }
  };

const updateDogData = () => {
    const updatedDogsData = dogsData.map(dog => {
      const urlParts = dog.url.split('/');
      const lastPart = urlParts[urlParts.length - 2];
      const extractedInteger = parseInt(lastPart, 10);
  
      return { ...dog, url: extractedInteger };
    });
  
    setDogData(updatedDogsData);
  };

  

  return (
    <div>
        <Navbar1/>
        
      <h2>See Friends activities</h2>
      <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={handleInputChange} placeholder="Enter Friends ID" />
                <button type="submit">Load his informations</button>
      </form>
      <div><h1>{FriendName}</h1></div>

      
      <div className='AboutFriends'>
        
      <div >
        
      {/* <input type="text" value={dogId} onChange={(e) => setDogId(e.target.value)} /> */}
      <center><button onClick={fetchDogData}>See his friend list</button></center>
      <button onClick={updateDogData}>Enable adding</button>
      { dogsData.length > 0 && (
        <div>
          {dogsData.map((dogData) => (
            <div key={dogData.id} className='friendList'>
              <h3>{dogData.user_name}</h3>
              <p>about: {dogData.about}</p>
              
              
              {/* <p>{dogData.id}</p> */}
              {console.log('url = '+dogData.url)}
              <ApiButton friendId={dogData.url-1}/>
              {/* Add other fields as needed */}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
    <div className='PostList'>
        <center><button onClick={handleShowElements}>See Posts</button></center>
    
    {showElements && (
        <div className='postwidth'>
          {filteredPosts.map((filteredPosts) => (
            <div key={filteredPosts.id}>
                <div className='msgwidth'>
                    <p>{filteredPosts.self_id}</p>
                    <h2>{filteredPosts.quote}</h2>
                </div>
                
            </div>
            
          ))}
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default Test;
