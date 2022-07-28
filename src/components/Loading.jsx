import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Spin></Spin>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(80, 80, 80, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 60;
`;

const Spin = styled.div`
  &:before {
    -webkit-animation: spin 1s infinite linear;
    animation: spin 1s infinite linear;
    border-radius: 10px;
    -webkit-box-shadow: 25px 0px 0 0 rgba(6, 118, 255, 0.2),
      20.22542px 14.69463px 0 0 rgba(6, 118, 255, 0.4),
      7.72542px 23.77641px 0 0 rgba(6, 118, 255, 0.6),
      -7.72542px 23.77641px 0 0 rgba(6, 118, 255, 0.8),
      -20.22542px 14.69463px 0 0 rgb(6, 118, 255);
    box-shadow: 25px 0px 0 0 rgba(6, 118, 255, 0.2),
      20.22542px 14.69463px 0 0 rgba(6, 118, 255, 0.4),
      7.72542px 23.77641px 0 0 rgba(6, 118, 255, 0.6),
      -7.72542px 23.77641px 0 0 rgba(6, 118, 255, 0.8),
      -20.22542px 14.69463px 0 0 rgb(6, 118, 255);
    height: 10px;
    width: 10px;
    display: block;
    content: "";
  }
`;
