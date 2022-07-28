import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import variable from "../variable";
import story5 from "../images/story-5.jpg";
import story6 from "../images/story-6.jpg";
import story1 from "../images/story-1.jpg";
import story4 from "../images/story-4.jpg";

const StorySlider = () => {
  const user = useSelector(selectUser);
  return (
    <Story>
      <div className="story-wrapper">
        <div className="story-box profile">
          {user && user.profileImg && <img src={user.profileImg} alt="" />}
          <div className="plus-box">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="profile-box"></div>
        </div>
        <div className="story-box">
          <img src={story5} alt="" />
        </div>
        <div className="story-box">
          <img src={story6} alt="" />
        </div>
        <div className="story-box">
          <img src={story1} alt="" />
        </div>
        <div className="story-box">
          <img src={story4} alt="" />
        </div>
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
  height: 200px;
  margin-bottom: 2.5rem;

  .profile {
    position: relative;
    img {
      opacity: 0.8;
    }

    .plus-box {
      z-index: 2;
      position: absolute;
      background-color: ${variable.primaryColor};
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 14%;
      border: 5px solid white;

      svg {
        color: white;
        font-size: 2rem;
      }
    }

    .profile-box {
      position: absolute;
      bottom: 0;
      background-color: white;
      height: 25%;
      width: 100%;
    }
  }

  .story-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .story-box {
    min-width: 18%;
    min-height: 30%;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 5px;
    background-color: #181818;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 700px) {
    height: 180px;
    .story-box:last-child {
      display: none;
    }
    .story-box {
      min-width: 22%;
      max-width: 22%;
      min-height: 35%;
    }
  }
`;
