import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'

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
								<Nav.Link as={Link} to={'/test'}>TestComponents</Nav.Link>
								<Nav.Link className={'log in'} as={Link} to={'/'}>Pricing</Nav.Link>
								<NavDropdown className={'log in'} title="Dropdown" id="collasible-nav-dropdown">
									<NavDropdown.Item as={Link} to={'/'}>Action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Another action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Something</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link className={'log in'} as={Link} id={'logOut'} to={'/'}>Log Out</Nav.Link>
								<Nav.Link className={'log Out'} as={Link} to={'login'}>Log In</Nav.Link>
								<Nav.Link className={'log Out'} as={Link} to={'SignUp'}>Sign Up</Nav.Link>
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