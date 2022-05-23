import React from "react"
import {Navbar, Nav, Container, Offcanvas} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
                  <Nav.Link ><NavLink to="/alerts"><Button variant="info" className="nav__links" active>Alerts</Button></NavLink></Nav.Link>
                  <Nav.Link ><NavLink to="/carousel"><Button variant="info" className="nav__links">Carousel</Button></NavLink></Nav.Link>
                  <Nav.Link ><NavLink to="/badge"><Button variant="info" className="nav__links">Link 3</Button></NavLink></Nav.Link>
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