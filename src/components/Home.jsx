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
  padding: 0 3%;
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

export default Home;
