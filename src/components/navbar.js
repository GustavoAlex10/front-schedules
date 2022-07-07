import React, { useState } from "react";
import styled from "styled-components";

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.7rem;

  &:hover {
    color: white;
  }
`;

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  align-items: center;
  flex-wrap: wrap;

  background: #000;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 15px;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <Logo href="/">
        Schedules
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Dash</MenuLink>
        <MenuLink href="/planner">Planner</MenuLink>
        <MenuLink href="/payments">Payment</MenuLink>
        <MenuLink href="/employeeRegister">Employee</MenuLink>
        <MenuLink href="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;


