import React from "react";
import styled from "styled-components";

const StorySlider = () => {
  return (
    <Story>
      <div className="story-wrapper">
        <div className="story-box"></div>
        <div className="story-box"></div>
        <div className="story-box"></div>
        <div className="story-box"></div>
        <div className="story-box"></div>
      </div>
    </Story>
  );
};

export default StorySlider;

const Story = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: 100%;
  margin-bottom: 2.5rem;

  .story-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .story-box {
    min-width: 18%;
    padding-bottom: 30%;
    border-radius: 10px;
    background-color: pink;
  }

  @media screen and (max-width: 700px) {
    .story-box:last-child {
      display: none;
    }
    .story-box {
      min-width: 22%;
      padding-bottom: 35%;
    }
  }
`;
