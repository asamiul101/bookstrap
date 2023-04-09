import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <Navbar expand='lg'>
      <Container fluid style={{ backgroundColor: 'blueviolet' }}>
        <Navbar.Brand href='/'>BookStrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
