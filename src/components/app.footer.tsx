'use client'

import { Container, Nav, Navbar } from "react-bootstrap"
import x from '@/styles/app.module.css'

export default function AppFooter() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className={x['center']}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#Terms & Conditions">Terms & Conditions</Nav.Link>
                        <Nav.Link href="#Privacy Policy">Privacy Policy</Nav.Link>
                        <Nav.Link href="#For Teams">For Teams</Nav.Link>
                        <Nav.Link href="#Join Us">Join Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}