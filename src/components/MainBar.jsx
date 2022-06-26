import React from "react";
import styled from "styled-components";
import StorySlider from "./StorySlider";
import AddPost from "./AddPost";
import Posts from "./Posts";

const MainBar = () => {
  return (
    <Bar>
      <StorySlider />
      <AddPost />
      <Posts />
    </Bar>
  );
};

export default MainBar;

const Bar = styled.div`
  padding: 2.5rem 2rem 0;
  min-width: 550px;
  max-width: 650px;
  flex: 1;
  height: 200vh;
  @media screen and (max-width: 700px) {
    min-width: 320px;
    max-width: 500px;
    padding-left: 0;
    padding-right: 0;
  }
`;
