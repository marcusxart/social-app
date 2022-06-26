import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faFaceGrin,
  faPhotoFilm,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import variable from "../variable";

const AddPost = () => {
  return (
    <AddPostStyled>
      <div className="top-wrapper">
        <FontAwesomeIcon className="profile" icon={faCircleUser} />
        <p>What's on your mind, Profile?</p>
      </div>
      <hr />
      <div className="bottom-wrapper">
        <div className="tab">
          <FontAwesomeIcon className="video" icon={faVideo} />
          <span>Live video</span>
        </div>
        <div className="tab">
          <FontAwesomeIcon className="photo" icon={faPhotoFilm} />
          <span>Photo/video</span>
        </div>
        <div className="tab">
          <FontAwesomeIcon className="face" icon={faFaceGrin} />
          <span>Feeling/activity</span>
        </div>
      </div>
    </AddPostStyled>
  );
};

export default AddPost;

const AddPostStyled = styled.div`
  max-width: 50rem;
  height: 13rem;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  margin-bottom: 2.5rem;

  .top-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    padding-top: 5px;

    .profile {
      font-size: 3.5rem;
      color: ${variable.primaryColor};
      margin-right: 1rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: #555555;
      background-color: #f0f2f5;
      width: 100%;
      padding: 12px 12px;
      border-radius: 60px;
      word-spacing: 2px;

      &:hover {
        background-color: #e5e6e9;
      }
    }
  }
  .bottom-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 10px;

    .tab {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 8px 5px;
      border-radius: 10px;
      &:hover {
        background-color: #f1f1f3;
      }
    }

    span {
      font-size: 1.5rem;
      font-weight: 500;
    }

    svg {
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }

    .video {
      color: #f9a0ae;
    }

    .photo {
      color: #45bd62;
    }

    .face {
      color: #f7b928;
    }
  }
`;
