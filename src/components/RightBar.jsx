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
  padding-left: 50px;
  flex-basis: 25%;
  position: sticky;
  align-self: flex-start;
  top: 7rem;
  max-height: 85vh;
  overflow-y: scroll;
  h2,
  hr {
    margin-left: 1rem;
  }
`;
