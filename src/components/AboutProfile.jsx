import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBriefcase,
  faGraduationCap,
  faLocationDot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const AboutProfile = () => {
  return (
    <Container>
      <div className="left-wrapper">
        <header>
          <h2>About</h2>
        </header>
      </div>
      <div className="right-wrapper">
        <AboutDetails>
          <li>
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              Work at <span>Doctor</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>
              Studied at <span>Imo State University Owerri</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faHouseChimney} />
            <p>
              Lives in <span>Owerri, Imo</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              From <span>Orlu, Imo</span>
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faHeart} />
            <p>Single</p>
          </li>
        </AboutDetails>
      </div>
    </Container>
  );
};

export default AboutProfile;

const Container = styled.div`
  padding: 2.5rem 1.5rem;
  background: white;
  max-width: 940px;
  margin: 0 auto 2rem;
`;

const AboutDetails = styled.ul`
  margin-top: 2rem;
  list-style: none;
  font-size: 1.5rem;

  svg {
    font-size: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }

  li {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
  }

  span {
    font-weight: bold;
  }
`;
