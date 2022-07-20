import React from "react";
import styled from "styled-components";
import ads1 from "../images/ad1.jpg";
import ads2 from "../images/ad2.jpg";

const Ads = () => {
  return (
    <AdsStyled className="ads">
      <h2 style={{ marginBottom: "1rem" }}>Advertisement</h2>
      <div className="ads-wrapper">
        <a href="https://www.jumia.com.ng/" target="_blank" className="link">
          <img className="img" src={ads1} />
          <div className="content">
            <h3>Black Friday</h3>
            <p>www.jumia.com.ng</p>
          </div>
        </a>

        <a href="https://www.saveourworld.me/" target="_blank" className="link">
          <img className="img" src={ads2} />
          <div className="content">
            <h3>Save Our World</h3>
            <p>www.saveourworld.me</p>
          </div>
        </a>
      </div>
    </AdsStyled>
  );
};

export default Ads;

const AdsStyled = styled.div`
  padding-bottom: 15px;
  .ads-wrapper {
    display: flex;
    flex-direction: column;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    padding-left: 1rem;

    h3 {
      font-size: 1.5rem;
    }
    &:hover {
      background-color: #e4e6e9;
      border-radius: 1rem;
    }
  }

  .img {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    margin-right: 1.5rem;
    object-fit: cover;
  }
`;
