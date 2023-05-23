import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: white;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

const NavLink = styled.a`
  color: black;
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
        <NavLink href="/merch">Merch</NavLink>
        
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
