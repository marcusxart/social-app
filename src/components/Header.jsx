import React from "react";
import styled from "styled-components";
import variable from "../variable";

const Header = () => {
  return (
    <Nav>
      <div className="logo">
        <span className="s">S</span>
        <span>ocial</span>
      </div>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  color: ${variable.primaryColor};
  background-color: ${variable.white};
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .logo {
    font-size: 2rem;
    display: flex;
    align-items: center;
    .s {
      font-family: "Lobster", cursive;
      font-size: 3.5rem;
    }
  }
`;
