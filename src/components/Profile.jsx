import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Story6 from "../images/story-6.jpg";
import Story5 from "../images/story-5.jpg";
import AboutProfile from "./AboutProfile";
import PostsProfile from "./PostsProfile";
import FriendsProfile from "./FriendsProfile";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const pathname = useLocation().pathname;

  const handleTabs = () => {
    if (pathname === "/profile/about") return <AboutProfile />;
    else if (pathname === "/profile/friends") return <FriendsProfile />;
    else return <PostsProfile />;
  };

  return (
    <ProfileStyled>
      <div className="top-wrapper">
        <div className="dashboard">
          <div className="cover">
            <img src={Story6} alt="" />
          </div>
          <div className="info">
            <div className="profile-desc">
              <div className="profile-img">
                <img src={Story5} alt="" />
              </div>
              <div className="profile-info">
                <h1>Name Surname</h1>
                <p>33 friends</p>
              </div>
            </div>

            <div className="btn-group">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#e4e6e9",
                  color: "black",
                  fontSize: "1.4rem",
                  "&:hover": {
                    bgcolor: "#d5d7da",
                  },
                }}
              >
                <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />
                Edit Profile
              </Button>
            </div>
          </div>
          <hr />
          <div className="nav">
            <ul>
              <li>
                <Link to="/profile">Posts</Link>
              </li>
              <li>
                <Link to="about">Abouts</Link>
              </li>
              <li>
                <Link to="friends">Friends</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">{handleTabs()}</div>
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  .top-wrapper {
    width: 100%;
    background-color: white;
  }
  .dashboard {
    display: flex;
    flex-direction: column;
    max-width: 940px;
    margin: 0 auto;
    height: 530px;
    position: relative;
  }

  .cover {
    width: 100%;
    position: relative;
    height: 380px;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    width: 90%;
    margin: 0 auto 10px;
    height: 160px;
    justify-content: space-between;
    align-items: center;

    .btn-group {
      display: flex;
      align-items: flex-end;
      height: 100%;
      padding-bottom: 30px;
    }

    .profile-desc {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1.8rem;
      }
      .profile-img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        border: 5px solid white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .nav {
    flex: 1;
    ul {
      display: flex;
      height: 100%;
      align-items: center;
    }

    li {
      list-style: none;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 1.5rem;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  .bottom-wrapper {
    margin-top: 20px;
  }
`;
