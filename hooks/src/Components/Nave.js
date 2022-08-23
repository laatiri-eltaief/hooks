import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import AddMovie from './AddMovie';

function Nave({search,setSearch,movies,setMovies}) {
  const addmovie=(newFilm)=>(setMovies([...movies,newFilm]))
  return (
    <div style={{textAlign:'center'}} className='Nav'>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" style={{textDecoration:"none"}}><h1 >Movie App</h1> </Navbar.Brand>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        style={{ maxHeight: '200px' }} 
        className='Nav1'
        navbarScroll
      >
        <Link to='/'>Home</Link>
        <Link to='/About' >About</Link>
        <Link to='/Contact' >Contact</Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search} onChange={(e)=>setSearch(e.target.value)}
        />
 
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Nave