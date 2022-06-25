import React from "react";
import styled from "styled-components";

const AddPost = () => {
  return (
    <AddPostStyled>
      <div className="top-wrapper">a</div>
      <hr />
      <div className="right-wrapper">b</div>
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
`;
