import React from "react"
import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import Home from "./Home"

const NavigationBar = () => {
  return(
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>React Bootstrap Practice</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React Bootstrap Practice
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="nav__links"><NavLink to="/alerts">Alerts</NavLink></Nav.Link>
                  <Nav.Link className="nav__links"><NavLink to="/accordion">Link 2</NavLink></Nav.Link>
                  <Nav.Link className="nav__links"><NavLink to="/badge">Link 3</NavLink></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavigationBar