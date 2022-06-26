import React from "react";
import styled from "styled-components";
import { handleSetHeight } from "../utils";
import variable from "../variable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  return (
    <CommentStyled>
      <div className="header">
        <FontAwesomeIcon icon={faArrowDown} />
        <span>9 Comments</span>
      </div>
      <hr />
      <div className="comment-link">
        <div className="comment-input">
          <div className="input-wrap">
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faCircleUser} />
              <form className="input-box" onSubmit={(e) => e.preventDefault()}>
                <textarea
                  placeholder="Write a comment..."
                  onChange={handleSetHeight}
                />
              </form>
            </div>
            <p className="helper">Press Enter to post.</p>
          </div>
        </div>
        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium omnis similique sapiente, voluptatibus quos eum!
            </p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="comment">
          <FontAwesomeIcon icon={faCircleUser} />
          <div className="comment-desc">
            <span className="name">Profile Name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium omnis similique sapiente, voluptatibus quos eum!
            </p>
          </div>
        </div>
      </div>
    </CommentStyled>
  );
};

export default Comments;

const CommentStyled = styled.div`
  height: 0;
  font-size: 1.5rem;
  padding: 2rem;
  word-spacing: 1px;
  .helper {
    font-size: 1rem;
    margin: 0.8rem 0;
    margin-left: 45px;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }

  hr {
    margin: 1rem 0;
  }

  .comment-link {
    .input-wrap {
      display: flex;
      flex-direction: column;
    }
    .comment,
    .input-wrapper {
      display: flex;
      margin: 2rem 0;
      svg {
        font-size: 3.5rem;
        color: ${variable.primaryColor};
        margin-right: 1rem;
      }

      .comment-desc {
        background-color: #f0f2f5;
        max-width: 85%;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        .name {
          display: inline-block;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 5px;
        }
      }
    }

    .input-wrapper {
      margin: 0;
      .input-box {
        background-color: #f0f2f5;
        padding: 1rem 1.5rem;
        width: 100%;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          font-size: 2rem;
          cursor: pointer;
        }

        button {
          border: none;
          outline: none;
        }
        textarea {
          font-size: 1.5rem;
          width: 100%;
          height: 30px;
          background: transparent;
          outline: none;
          border: none;
          word-spacing: 2px;
          resize: none;
          overflow: hidden;
        }
      }
    }
  }
`;
