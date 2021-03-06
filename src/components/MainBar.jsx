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
      <div className="posts">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </Bar>
  );
};

export default MainBar;

const Bar = styled.div`
  padding: 2.5rem 2rem;
  min-width: 550px;
  max-width: 650px;

  flex: 1;
  .posts {
    max-width: 50rem;
    margin: auto;
  }
  @media screen and (max-width: 700px) {
    min-width: 320px;
    max-width: 500px;
    padding-left: 0;
    padding-right: 0;
  }
`;
