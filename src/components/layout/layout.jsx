import "./style.css"
import * as React from 'react';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Layout({children}) {
	return (
		<Container fluid>
			<Row>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="position-sticky top-0">
					<Container>
						<Navbar.Brand>ReactOnFire</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to={'/'}>Features</Nav.Link>
								<Nav.Link as={Link} to={'/'}>Pricing</Nav.Link>
								<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
									<NavDropdown.Item as={Link} to={'/'}>Action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Another action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Something</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link as={Link} to={'login'}>Sig In</Nav.Link>
								<Nav.Link as={Link} to={'SignUp'}>Sign Up</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Row>
			<Row>
				<Col>{children}</Col>
			</Row>
		</Container>
	)
};