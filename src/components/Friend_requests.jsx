
import React from "react"
import Navbar1 from "./Navbar"
const originalData = [
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/1/",
      "self_id": null,
      "friend_id": 2
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/2/",
      "self_id": null,
      "friend_id": 5
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/3/",
      "self_id": null,
      "friend_id": 6
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/4/",
      "self_id": null,
      "friend_id": 6
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/5/",
      "self_id": 1,
      "friend_id": 3
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/6/",
      "self_id": 5,
      "friend_id": 4
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/Friends/7/",
      "self_id": 6,
      "friend_id": 3
    }
  ];
function Friend_requests(){
    // return(
    //     <div>
    //         <Navbar1/>
    //         This is the Friend requests
    
    //     </div>
    // )
    // const filteredData = originalData.filter(entry => entry.self_id === 1);
    
    const filteredData = originalData.filter(entry => entry.self_id === 1);
  return (
    <div>
        <Navbar1/>
      <h4>Filtered JSON:</h4>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
}

export default Friend_requests