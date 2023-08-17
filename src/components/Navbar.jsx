import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

function Navbar1(){
    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Be Social</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Feed" className="nav">Feed</Nav.Link>
            <Nav.Link href="locals" className="nav">Locals</Nav.Link>
            <Nav.Link href="friends" className="nav">Search Friends</Nav.Link>
            {/* <Nav.Link href="yourconnections" className="nav">Your Friends</Nav.Link> */}
            <Nav.Link href="suggestions" className="nav">Friends suggestions</Nav.Link>
            <Nav.Link href="friendrequests" className="nav">Friend Requests</Nav.Link>
            <Nav.Link href="test" className="nav">See Friends Activities</Nav.Link>
            <Nav.Link href="postWhatsinMind" className="nav">Post Something</Nav.Link>
            <Nav.Link href="primaryinfo" className="nav">Update profile</Nav.Link>
            <Nav.Link href="logout" className="nav">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default Navbar1

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <br />
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;