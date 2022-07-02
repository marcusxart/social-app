import React from "react";
import Posts from "./Posts";
import styled from "styled-components";

const PostsProfile = () => {
  return (
    <Container>
      <Posts />
      <Posts />
    </Container>
  );
};

export default PostsProfile;

const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;
