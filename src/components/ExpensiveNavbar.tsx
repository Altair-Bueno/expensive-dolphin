import {Container, Nav, Navbar} from "react-bootstrap";

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
      { page: Pages.Search, icon: "bi-search", name: "Search" },
      { page: Pages.MyList, icon: "bi-bag", name: "My List" },
      { page: Pages.Profile, icon: "bi-person-circle", name: username },
      { page: Pages.Help, icon: "bi-question-circle", name: "Help" },
    ].map((x) => (
      <LinkContainer to={x.page}>
        <Nav.Link active={false}>
          <i className={x.icon} /> {x.name}
        </Nav.Link>
      </LinkContainer>
    ));
    const externalList = [
        {icon:"bi-github", page:"https://github.com/Altair-Bueno/expensive-dolphin"}
    ].map(x=>(
        <a href={x.page} target="_blank" className={"nav-link"}>
            <i className={`${x.icon} h4`}/>
        </a>
    ))

    return <Navbar collapseOnSelect={true}
        bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} height="25" alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{linkList}</Nav>
          </Navbar.Collapse>
            <Nav>
                {externalList}
            </Nav>
        </Container>
      </Navbar>
}