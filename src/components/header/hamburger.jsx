import { useContext } from "react";
import MenuContext from "../../context";
import { Hamburger } from "../../styles/header.style";

const MenuComponent = () => {
  const { open, setOpen } = useContext(MenuContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Hamburger.Wrapper onClick={handleClick}>
      <Hamburger.HamburgerLines open={open}></Hamburger.HamburgerLines>
      <Hamburger.HamburgerLines open={open}></Hamburger.HamburgerLines>
      <Hamburger.HamburgerLines open={open}></Hamburger.HamburgerLines>
    </Hamburger.Wrapper>
  );
};

export default MenuComponent;
