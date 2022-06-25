import React from "react";
import styled from "styled-components";
import Ads from "./Ads";
import Contacts from "./Contacts";

const RightBar = () => {
  return (
    <Bar>
      <Ads />
      <hr />
      <Contacts />
    </Bar>
  );
};

export default RightBar;

const Bar = styled.div`
  padding-left: 5rem;
  width: 320px;
  position: sticky;
  align-self: flex-start;
  top: 8.5rem;
  max-height: 100vh;
  overflow-y: scroll;
  h2,
  hr {
    margin-left: 1rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
