import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import variable from "../variable";

const Auth = () => {
  return (
    <AuthStyled>
      <div className="left-wrapper">
        <h1>
          <span className="s">S</span>ocial
        </h1>
      </div>
      <div className="right-wrapper">
        <div className="wrap">
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              placeholder="Email"
              type="email"
              inputProps={{ style: { fontSize: 15 } }}
            />
            <TextField
              placeholder="Password"
              type="password"
              inputProps={{ style: { fontSize: 15 } }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Log in
            </Button>
          </form>
          <hr />
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            sx={{
              fontSize: "1.5rem",
            }}
          >
            Create an Account
          </Button>
        </div>
      </div>
    </AuthStyled>
  );
};

export default Auth;

const AuthStyled = styled.div`
  display: flex;
  height: 100vh;
  .left-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 800;
      font-size: 4rem;
      color: ${variable.secondaryColor};
    }

    .s {
      font-family: "Lobster", cursive;
      font-size: 8rem;
    }
  }

  .right-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrap {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 2rem 1.5rem;
      border-radius: 1rem;
      hr {
        margin: 10px 0;
        width: 100%;
      }
    }
    form {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
