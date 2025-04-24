import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)

            }else{
                setScrolled(false);
            }
        }

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (active) => {
        setActiveLink(active)
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;