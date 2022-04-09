import "./style.css"
import * as React from 'react';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Layout({children}) {
	return (
		<Container fluid>
			<Row>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand>ReactOnFire</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
								<Nav.Link as={Link} to={'login'}>More deets</Nav.Link>
								<Nav.Link as={Link} to={'login'} eventKey={2}>
									Dank memes
								</Nav.Link>
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