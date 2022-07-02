import React from "react";
import styled from "@emotion/styled";
import variable from "../variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const FriendsProfile = () => {
  return (
    <Container>
      <header>
        <h2>Friends</h2>
      </header>
      <Lists>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
        <li className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </li>
      </Lists>
    </Container>
  );
};

export default FriendsProfile;

const Container = styled.div`
  padding: 2.5rem 1.5rem;
  background: white;
  max-width: 940px;
  margin: 0 auto;
`;

const Lists = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem 0;
    padding-left: 1rem;
    margin: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 500;
    &:hover {
      background-color: #e4e6e9;
      border-radius: 1rem;
    }

    svg {
      font-size: 6rem;
      width: 6rem;
      margin-right: 1rem;
      color: ${variable.primaryColor};
    }
  }
`;
