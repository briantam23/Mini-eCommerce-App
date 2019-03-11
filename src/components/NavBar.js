import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
    return(
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: '50px' }}>
                <Navbar.Brand href="#">Mini e-Commerce App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#cart">Cart</Nav.Link>
                        <Nav.Link href="#orders">Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}


export default NavBar;