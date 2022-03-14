import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'
import {Pages} from "../pages";

export {
    ExpensiveNavbar
}

function ExpensiveNavbar() {
    return <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand>
                <img
                    srcSet="/src/resources/logo.png"
                    width="30"
                    height="30"
                    className={"bi-person-circle text-light h4"}
                />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to={Pages.Home}>
                        <Nav.Link>Today's Deals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.Stores}>
                        <Nav.Link>Stores</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.MyList}>
                        <Nav.Link>My List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.Help}>
                        <Nav.Link>Help</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Text>
                    {/*
                        FIXME icon placement and responsive behaviour
                        FIXME link breaks the navbar behaviour
                     */}
                    <LinkContainer to={Pages.Profile}>
                        <i className={"bi-person-circle text-light h4"}/>
                    </LinkContainer>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}