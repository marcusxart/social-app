import React from "react";
import variable from "../variable";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <ContactStyled>
      <h2>Contacts</h2>
      <div className="contact-lists">
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
        <div className="user">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contacts;

const ContactStyled = styled.div`
  h2 {
    padding-top: 1.5rem;
  }

  .user {
    display: flex;
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
      font-size: 3rem;
      width: 3rem;
      margin-right: 1rem;
      color: ${variable.primaryColor};
    }
  }
`;
