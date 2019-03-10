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
                <Navbar.Brand href="#home">Mini e-Commerce App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                    <Nav.Link href="#orders">Orders</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}


export default NavBar;