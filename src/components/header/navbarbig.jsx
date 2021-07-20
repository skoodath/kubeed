import { Navbar, Nav } from "../../styles/header.style";

const NavbarBigComponent = () => {
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
          to="courses"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
        >
          Courses
        </Nav>
        <Nav
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
        >
          Instructor
        </Nav>
        <Nav
          to="faq"
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
        >
          FAQs
        </Nav>
        <Nav
          to="connect"
          smooth={true}
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

export default NavbarBigComponent;
