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
    const username = props.username || "My account";
    
    const linkList = [
      { page: Pages.Home, icon: "bi-currency-dollar", name: "Today's Deals" },
      { page: Pages.Stores, icon: "bi-shop", name: "Stores" },
      { page: Pages.MyList, icon: "bi-bag", name: "My List" },
      { page: Pages.Help, icon: "bi-question-circle", name: "Help" },
      { page: Pages.Profile, icon: "bi-person-circle", name: username },
    ].map((x) => (
      <LinkContainer to={x.page}>
        <Nav.Link>
          <i className={x.icon} /> {x.name}
        </Nav.Link>
      </LinkContainer>
    ));

    return <Navbar collapseOnSelect={true}
        bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} height="25" alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{linkList}</Nav>
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