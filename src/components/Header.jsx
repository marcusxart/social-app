import React, { useState } from "react";
import styled from "styled-components";
import variable from "../variable";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPeopleGroup,
  faShop,
  faTv,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const path = useLocation().pathname;
  const user = useSelector(selectUser);

  const isActive = JSON.parse(localStorage.getItem("isLoggin")).isActive;

  const handleSignOut = async () => {
    setToggle(false);
    try {
      await signOut(auth);
      localStorage.setItem("isLoggin", JSON.stringify({ isActive: "false" }));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {path === "/" && isActive ? null : (
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
          <FontAwesomeIcon
            onClick={() => setToggle(!toggle)}
            className="profile-icon"
            icon={faCircleUser}
          />
          {toggle && (
            <Modol>
              <Link to="/profile">
                <div className="modol-info" onClick={() => setToggle(false)}>
                  <FontAwesomeIcon
                    className="profile-icon"
                    icon={faCircleUser}
                  />
                  <p>{user && user.name}</p>
                </div>
              </Link>
              <hr />
              <div className="sign-out" onClick={handleSignOut}>
                <p>Log Out</p>
              </div>
            </Modol>
          )}
        </Nav>
      )}
    </>
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

  .profile-icon {
    font-size: 3.5rem;
    cursor: pointer;
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

const Modol = styled.div`
  position: absolute;
  top: 50px;
  border-radius: 10px;
  width: 300px;
  padding: 8px;
  background-color: white;
  box-shadow: 0 0 20px lightgrey;
  right: 20px;
  z-index: 12;
  .modol-info {
    display: flex;
    width: 100%;
    padding: 1rem 0.5rem;
    &:hover {
      background-color: #f1f2f3;
      border-radius: 1rem;
    }
  }
  p {
    font-size: 2.5rem;
    margin-left: 10px;
    color: #353535;
  }
  a {
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0;
    width: 100%;
    text-decoration: none;

    color: ${variable.primaryColor};
  }
  .sign-out {
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0.5rem;
    p {
      cursor: pointer;
      font-size: 1.5rem;
      color: #d61010;
      &:hover {
        color: #f30d0d;
      }
    }
  }
`;
