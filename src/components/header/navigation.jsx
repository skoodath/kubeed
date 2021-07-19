import { Navbar, Nav } from "../../styles/header.style";

const NavbarComponent = () => {
  return (
    <Navbar.Wrapper>
      <Navbar.Menu>
        <Nav
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          role="button"
          tabIndex="0"
        >
          Home
        </Nav>
        <Nav
          activeClass="active"
          to="courses"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          role="button"
          tabIndex="0"
        >
          Courses
        </Nav>
        <Nav
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          role="button"
          tabIndex="0"
        >
          Instructor
        </Nav>
        <Nav
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
        >
          FAQs
        </Nav>
        <Nav
          activeClass="active"
          to="connect"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
          role="button"
          tabIndex="0"
        >
          Connect
        </Nav>
      </Navbar.Menu>
    </Navbar.Wrapper>
  );
};

export default NavbarComponent;
