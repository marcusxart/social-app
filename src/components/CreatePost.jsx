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
        <form action="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
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
  width: 350px;
  height: 200px;
  background-color: white;
  box-shadow: 0 0 15px grey;
`;
