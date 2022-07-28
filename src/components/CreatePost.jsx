import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const CreatePost = () => {
  return (
    <Container>
      <AddPost>
        <header>
          <h2>Create Post</h2>
        </header>
        <hr />
        <div className="user">
          <p>CHIVOS</p>
        </div>
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            maxlength="100"
            placeholder="What's on your mind?"
          ></textarea>
          <label htmlFor=""></label>
          <input type="file" name="" id="" />
          <Button>Post</Button>
        </form>
      </AddPost>
    </Container>
  );
};

export default CreatePost;

const Container = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(224, 224, 224, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AddPost = styled.div`
  width: 400px;
  background-color: white;
  box-shadow: 0 0 15px grey;
  border-radius: 10px;

  header {
    text-align: center;
    padding: 20px 0;
    h2 {
      color: #161616;
    }
  }

  form {
    padding: 20px;

    textarea {
      font-size: 1.8rem;
      width: 100%;
      height: 100px;
      background: transparent;
      outline: none;
      border: none;
      word-spacing: 2px;
      resize: none;
      overflow: hidden;
    }
  }
`;
