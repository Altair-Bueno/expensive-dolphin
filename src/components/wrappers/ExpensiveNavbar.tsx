import {Container, Nav, Navbar} from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'
import {Pages} from "../../pages";
import logo from '../../resources/logo.svg'

export {
    ExpensiveNavbar
}

function ExpensiveNavbar() {
    const linkList = [
      { page: Pages.Home, icon: "bi-currency-dollar", name: "Today's Deals" },
      { page: Pages.Search, icon: "bi-search", name: "Search"},
      { page: Pages.Alerts, icon: "bi-gear", name: "Manage data"},
      { page: Pages.Help, icon: "bi-question-circle", name: "Help" },
    ].map((x,tabIndex) => (
      <LinkContainer to={x.page}>
        <Nav.Link active={false} >
          <i className={x.icon} /> {x.name}
        </Nav.Link>
      </LinkContainer>
    ));
    return <Navbar collapseOnSelect={true}
        bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
              <LinkContainer to={Pages.Home}>
                  <a><img src={logo} height="25" alt={"logo"} /></a>
              </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{linkList}</Nav>
            <Nav>
                <a href={"https://github.com/Altair-Bueno/expensive-dolphin"} target="_blank" className={"nav-link"}>
                    <i className={"bi-github"}/> GitHub
                </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
}
