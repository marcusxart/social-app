import React from "react";
import styled from "styled-components";
import variable from "../variable";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPeopleGroup,
  faShop,
  faTv,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const path = useLocation().pathname;
  return path === "/auth" ? null : (
    <Nav>
      <div className="nav-left">
        <div className="logo">
          <span className="s">S</span>
          <span>ocial</span>
        </div>
      </div>
      <ul className="menu">
        <li>
          <FontAwesomeIcon icon={faHome} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTv} />
        </li>
        <li>
          <FontAwesomeIcon icon={faShop} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </li>
      </ul>
      <FontAwesomeIcon className="profile" icon={faCircleUser} />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  color: ${variable.primaryColor};
  background-color: ${variable.white};
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  svg {
    font-size: 2rem;
  }

  .profile {
    font-size: 3.5rem;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      padding: 0 4rem;
    }
  }

  .logo {
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    .s {
      font-family: "Lobster", cursive;
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    padding-left: 1rem;
    padding-right: 1rem;
    .menu {
      display: none;
    }
  }
`;
