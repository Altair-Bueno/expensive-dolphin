import {Container, Nav, Navbar} from "react-bootstrap";

import {LinkContainer} from 'react-router-bootstrap'
import {Pages} from "../../pages";
import logo from '../../resources/logo.svg'

export {
    ExpensiveNavbar
}

function ExpensiveNavbar() {
    const linkList = [
      { page: Pages.Home, icon: "bi-currency-dollar", name: "Today's Deals", tabindex: "1" },
      { page: Pages.Search, icon: "bi-search", name: "Search", tabindex: "2" },
      //{ page: Pages.MyList, icon: "bi-bag", name: "My List" },
      { page: Pages.Profile, icon: "bi-person-circle", name: "My account", tabindex: "3" },
      { page: Pages.Help, icon: "bi-question-circle", name: "Help", tabindex: "4" },
    ].map((x) => (
      <LinkContainer to={x.page}>
        <Nav.Link active={false} tabindex={x.tabindex} >
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
