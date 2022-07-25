import React from "react";
import styled from "styled-components";
import LeftBar from "./LeftBar";
import MainBar from "./MainBar";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <HomeStyled>
      <LeftBar />
      <MainBar />
      <RightBar />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  padding: 0 2rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 1030px) {
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export default Home;
