import Add from './addTodo.js';
import React, {useState} from "react";
import './App.css';
import {Nav, NavDropdown, Navbar, Button} from 'react-bootstrap'

 function App () {
  const [newtask, setNewtask] = useState([])
  const [alltask,setAlltask] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    setAlltask((prev) => [...prev, newtask])
    setNewtask([]);
  }
  const handleChange = ({target}) => {
    setNewtask((prev) => [target.value])
  }
  const removeItem = (index) => {
    setAlltask((prev) => prev.filter((items,ind) => ind !== index))
  }  
 return (<div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">SONIME TODO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <div className="container">
    <Add handleChange={handleChange} handleSubmit={handleSubmit} newtask={newtask}/>
    <ul>
      {alltask.map((tasks,index) => (<li  style={{marginBottom: "30px"}}key={index}>{tasks}
      <button className="btn btn-danger" onClick={() => {removeItem(index)}}>X</button>
      </li>))}
    </ul>
  </div>
    </div>)
   }
  
export default App