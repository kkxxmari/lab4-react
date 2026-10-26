import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

function NavigationBar() {  // Keep the collapse button and menu linked to the same open/closed state.
  const [expanded, setExpanded] = useState(false);
  // Read the current route so the selected link also follows Back and Forward.
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" collapseOnSelect
      expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">React Lab 4</Navbar.Brand>        {/* aria-controls points to the collapsible section below. */}
        <Navbar.Toggle aria-controls="page-menu" aria-expanded={expanded} />
        <Navbar.Collapse id="page-menu">
          <Nav className="ms-auto" activeKey={location.pathname}>
            {/* The end option prevents Home from matching every route. */}
            <Nav.Link as={NavLink} to="/" end eventKey="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/read" eventKey="/read">Read</Nav.Link>
            <Nav.Link as={NavLink} to="/create" eventKey="/create">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
import { useState } from 'react';
