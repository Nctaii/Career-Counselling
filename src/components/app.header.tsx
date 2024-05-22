'use client'

import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import x from '@/styles/app.module.css'

export default function AppHeader() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={x['center']}>
                        <Nav.Link href="PersonalityTypes">Personality Types</Nav.Link>
                        <Nav.Link href="SpecializedTest">Specialized Test</Nav.Link>
                        <Nav.Link href="Resources">Resources</Nav.Link>
                        <Nav.Link href="Login">Log In</Nav.Link>
                        <Button className='width = 100px'>Take the test</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}