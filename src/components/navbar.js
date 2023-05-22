import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: aqua;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LinksContainer>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/cart">Cart</NavLink>
        <NavLink href="/login">Login</NavLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
