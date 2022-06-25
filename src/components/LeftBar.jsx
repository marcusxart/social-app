import React from "react";
import styled from "styled-components";
import variable from "../variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faCalendarCheck,
  faCircleUser,
  faClockRotateLeft,
  faFlag,
  faFolder,
  faPeopleGroup,
  faShop,
  faStar,
  faTv,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const LeftBar = () => {
  return (
    <Bar>
      <div>
        <a className="bar-link">
          <FontAwesomeIcon icon={faCircleUser} />
          Profile
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faUserGroup} />
          Friends
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faPeopleGroup} />
          Groups
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faShop} />
          Marketplace
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faTv} />
          Watch
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faClockRotateLeft} />
          Memories
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faBookmark} />
          Saved
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faFlag} />
          Pages
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faCalendarCheck} />
          Events
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faFolder} />
          Most Recent
        </a>
        <a className="bar-link">
          <FontAwesomeIcon icon={faStar} />
          favorites
        </a>
        show more
      </div>
    </Bar>
  );
};

export default LeftBar;

const Bar = styled.div`
  flex-basis: 25%;
  position: sticky;
  top: 7rem;
  align-self: flex-start;
  .bar-link {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    svg {
      font-size: 2.5rem;
      width: 2.5rem;
      margin-right: 1.5rem;
      color: ${variable.primaryColor};
    }
  }
`;
