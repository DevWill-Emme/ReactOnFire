import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'


export default function Layout({children}) {
	return (
		<Container fluid id={"layoutContainer"}>
			<Row className={'header position-sticky top-0'}>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand>ReactOnFire</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link className={'log in'} as={Link} to={'/'}>Home</Nav.Link>
								{/*<NavDropdown className={'log Out'} title="Dropdown" id="collasible-nav-dropdown">
									<NavDropdown.Item as={Link} to={'/'}>Action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Another action</NavDropdown.Item>
									<NavDropdown.Item as={Link} to={'/'}>Something</NavDropdown.Item>
								</NavDropdown>*/}
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
			<Row className={"body"}>
				<Col>{children}</Col>
			</Row>
		</Container>
	)
};