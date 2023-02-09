import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navabar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  });

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              themshahid
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/academy">Academy</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/testimonials">Testimonials</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog">Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/cheatsheet">Cheat Sheets</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/community">Community</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign in">
                    <Button primary>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign in">
                    <Button primary fontBig>
                      SIGN IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navabar;
