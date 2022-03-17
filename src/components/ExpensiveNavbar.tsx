import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'
import {Pages} from "../pages";
import logo from '../resources/logo.svg'

export {
    ExpensiveNavbar
}

interface ExpensiveNavbarProps {
    username?:string|null
}

function ExpensiveNavbar(props:ExpensiveNavbarProps) {
    const usernamePlaceholder = "My account"

    const todayIcon = <i className={"bi-currency-dollar"}/>
    const storesIcon = <i className={"bi-shop"}/>
    const listIcon = <i className={"bi-bag"}/>
    const personIcon = <i className={"bi-person-circle"}/>
    const helpIcon = <i className={"bi-question-circle"}/>

    return <Navbar
                    bg="dark"
                    variant="dark"
                    expand="lg"
                    sticky="top"
                    collapseOnSelect={true}>
        <Container>
            <Navbar.Brand>
                <img
                    src={logo}
                    height="25"
                    alt={"logo"}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to={Pages.Home}>
                        <Nav.Link>{todayIcon} Today's Deals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.Stores}>
                        <Nav.Link>{storesIcon} Stores</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.MyList}>
                        <Nav.Link>{listIcon} My List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.Help}>
                        <Nav.Link>{helpIcon} Help</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={Pages.Profile}>
                        <Nav.Link>
                            {personIcon} {
                                (typeof props.username === "string") ?
                                    props.username:
                                    usernamePlaceholder
                            }
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"/>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}