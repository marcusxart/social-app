import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import { Link, useLocation } from "react-router-dom";
import Story6 from "../images/story-6.jpg";
import Story5 from "../images/story-5.jpg";
import AboutProfile from "./AboutProfile";
import PostsProfile from "./PostsProfile";
import FriendsProfile from "./FriendsProfile";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faUpload } from "@fortawesome/free-solid-svg-icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const pathname = useLocation().pathname;
  const user = useSelector(selectUser);
  const [coverImgToggle, setCoverImgToggle] = useState(false);
  const [imgToggle, setImgToggle] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const [coverFile, setCoverFile] = useState("");
  console.log(user && user.id);
  const handleUpdate = async (data) => {
    const uploadRef = doc(db, "users", user.id);
    await updateDoc(uploadRef, data);
  };
  useEffect(() => {
    const handleUpload = () => {
      const cover = new Date().getTime() + coverFile.name;
      const img = new Date().getTime() + imgFile.name;
      setImgToggle(false);
      setCoverImgToggle(false);
      const storageRef = ref(storage, `images/${cover || img}`);

      const uploadTask = uploadBytesResumable(storageRef, coverFile || imgFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (err) => {
          alert(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (imgFile) {
              user && handleUpdate({ profileImg: downloadURL });
            } else {
              user && handleUpdate({ coverImg: downloadURL });
            }
          });
        }
      );
    };

    (imgFile || coverFile) && handleUpload();
    setCoverFile("");
    setImgFile("");
  }, [coverFile, imgFile]);

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
            {coverImgToggle && (
              <div className="cover-modol">
                <label className="cover-btn" htmlFor="myfile1">
                  <FontAwesomeIcon icon={faUpload} />
                  <p>Upload Photo</p>
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="myfile1"
                  name="myfile1"
                  onChange={(e) => setCoverFile(e.target.files[0])}
                />
                <div className="cover-btn">
                  <FontAwesomeIcon icon={faTrashCan} />
                  <p>Remove</p>
                </div>
              </div>
            )}
            {user && user.coverImg ? (
              <img src={user.coverImg} alt="" />
            ) : (
              <div className="no-img"></div>
            )}
            <Button
              onClick={() => setCoverImgToggle(!coverImgToggle)}
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "black",
                fontSize: "1.2rem",
                position: "absolute",
                bottom: "10px",
                right: "10px",
                "&:hover": {
                  bgcolor: "#eeeeee",
                },
              }}
            >
              Edit Cover Photo
            </Button>
          </div>
          <div className="info">
            <div className="profile-desc">
              <div
                className="profile-img"
                onClick={() => setImgToggle(!imgToggle)}
              >
                {user && user.profileImg ? (
                  <img src={user.profileImg} alt="" />
                ) : (
                  <div className="no-img"></div>
                )}
              </div>
              <div className="profile-info">
                <h1>{user && user.name}</h1>
                <p>33 friends</p>
              </div>
              {imgToggle && (
                <Model className="profile-modol">
                  <label className="cover-btn" htmlFor="myfile2">
                    <FontAwesomeIcon icon={faUpload} />
                    <p>Upload Photo</p>
                  </label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="myfile2"
                    name="myfile2"
                    onChange={(e) => setImgFile(e.target.files[0])}
                  />
                  <div className="cover-btn">
                    <FontAwesomeIcon icon={faTrashCan} />
                    <p>Remove</p>
                  </div>
                </Model>
              )}
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

  .no-img {
    width: 100%;
    height: 100%;
    background-color: #52a9df;
  }

  .profile-modol {
    right: -58px;
    transform: translateY(-120px);
    box-shadow: 0 0 10px grey;
  }

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
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cover-modol {
      position: absolute;
      background: #fff;
      bottom: 0;
      right: 10px;
      width: 200px;
      padding: 4px;
      padding-bottom: 0;
      background-color: white;
      border-radius: 5px;
      z-index: 12;
      transform: translateY(-45px);

      p {
        font-size: 1.4rem;
      }

      .cover-btn {
        display: flex;
        align-items: center;
        color: #363636;
        cursor: pointer;
        width: 100%;
        padding: 8px;
        margin-bottom: 4px;
        border-radius: 5px;
        svg {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
        }
        &:hover {
          background-color: #f1f2f3;
        }
      }
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
        font-size: 1.4rem;
      }
      .profile-img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        border: 5px solid white;
        cursor: pointer;

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

const Model = styled.div`
  position: absolute;
  background: #fff;
  bottom: 0;
  right: 10px;
  width: 200px;
  padding: 4px;
  padding-bottom: 0;
  background-color: white;
  border-radius: 5px;
  z-index: 12;
  transform: translateY(-45px);
  p {
    font-size: 1.4rem;
  }
  .cover-btn {
    display: flex;
    align-items: center;
    color: #363636;
    cursor: pointer;
    width: 100%;
    padding: 8px;
    margin-bottom: 4px;
    border-radius: 5px;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: #f1f2f3;
    }
  }
`;
