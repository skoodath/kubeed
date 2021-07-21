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
          duration={100}
          role="button"
          tabIndex="0"
          onClick={handleClick}
          fontWeight={400}
          color={"#6b6b6b"}
        >
          Home
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="courses"
          smooth={true}
          offset={-50}
          duration={100}
          role="button"
          tabIndex="0"
          onClick={handleClick}
          fontWeight={600}
          color={"#1a1d1f"}
        >
          Courses
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="about"
          smooth={true}
          offset={0}
          duration={100}
          role="button"
          tabIndex="0"
          onClick={handleClick}
          fontWeight={400}
          color={"#6b6b6b"}
        >
          Instructor
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="faq"
          smooth={true}
          offset={-50}
          duration={100}
          role="button"
          tabIndex="0"
          onClick={handleClick}
          fontWeight={400}
          color={"#6b6b6b"}
        >
          FAQs
        </NavbarSmall.Nav>
        <NavbarSmall.Nav
          to="connect"
          smooth={true}
          duration={100}
          role="button"
          tabIndex="0"
          onClick={handleClick}
          fontWeight={400}
          color={"#6b6b6b"}
        >
          Connect
        </NavbarSmall.Nav>
      </NavbarSmall.MenuSmall>
    </NavbarSmall.Wrapper>
  );
};

export default NavbarSmallComponent;
