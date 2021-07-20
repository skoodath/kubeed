import { useContext } from "react";
import MenuContext from "../../context";
import { NavbarSmall } from "../../styles/header.style";

const NavbarSmallComponent = () => {
  const { open, setOpen } = useContext(MenuContext);

  const handleClick = (e) => {
    if (e.target) setOpen(!open);
  };

  return (
    <NavbarSmall.Wrapper open={open} onClick={handleClick}>
      <NavbarSmall.MenuSmall>
        <NavbarSmall.Nav
          to="home"
          smooth={true}
          offset={-75}
          duration={500}
          role="button"
          tabIndex="0"
          onClick={handleClick}
        >
          Home
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="courses"
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
          onClick={handleClick}
        >
          Courses
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="about"
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
          onClick={handleClick}
        >
          Instructor
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="faq"
          smooth={true}
          offset={0}
          duration={500}
          role="button"
          tabIndex="0"
          onClick={handleClick}
        >
          FAQs
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="connect"
          smooth={true}
          duration={400}
          role="button"
          tabIndex="0"
          onClick={handleClick}
        >
          Connect
        </NavbarSmall.Nav>
      </NavbarSmall.MenuSmall>
    </NavbarSmall.Wrapper>
  );
};

export default NavbarSmallComponent;
