import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Watch <span style={{ color: 'red' }}>Shop</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="text-center" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to='/home'>Home</Link>
                            <Link to='/categoris'>Catagories</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;