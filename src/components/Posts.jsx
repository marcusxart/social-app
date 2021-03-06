import React from "react";
import styled from "styled-components";
import Comments from "./Comments";
import variable from "../variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import story6 from "../images/story-6.jpg";

const Posts = () => {
  return (
    <PostsStyled>
      <Header>
        <div className="profile-wrapper">
          <div className="profile-info">
            <div className="profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span className="profile-name">Profile name</span>
            </div>
          </div>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <p className="post-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
          numquam!
        </p>
      </Header>
      <PostImage>
        <img src={story6} alt="" />
      </PostImage>
      <Comments />
    </PostsStyled>
  );
};

export default Posts;

const PostsStyled = styled.div`
  margin: auto;
  padding-bottom: 2rem;
  margin-bottom: 2.5rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`;

const Header = styled.div`
  padding: 2rem;
  color: #555555;

  .profile-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-bottom: 1rem;

    svg {
      font-size: 2rem;
    }

    .profile {
      display: flex;
      align-items: center;
      svg {
        font-size: 3.5rem;
        color: ${variable.primaryColor};
        margin-right: 1rem;
      }

      span {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
  svg {
    font-size: 2rem;
  }

  .post-desc {
    font-size: 1.5rem;
  }
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;
