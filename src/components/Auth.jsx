import React, { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import variable from "../variable";
import SignUp from "./SignUp";
import { auth, signInUser } from "../firebaseConfig";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const handleSignInUser = (e) => {
    e.preventDefault();

    signInUser(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  return (
    <AuthStyled>
      <div className="left-wrapper">
        <h1>
          <span className="s">S</span>ocial
        </h1>
      </div>
      <div className="right-wrapper">
        <div className="wrap">
          <header>
            <h2>Log In</h2>
          </header>
          <hr />
          <form onSubmit={handleSignInUser}>
            <TextField
              placeholder="Email"
              type="email"
              inputProps={{ style: { fontSize: 15 } }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Password"
              type="password"
              inputProps={{ style: { fontSize: 15 } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => setToggleSignUp(true)}
          >
            Create an Account
          </Button>
        </div>
      </div>
      <SignUp toggleSignUp={toggleSignUp} setToggleSignUp={setToggleSignUp} />
    </AuthStyled>
  );
};

export default Auth;

const AuthStyled = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
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

      header {
        width: 100%;
        h2 {
          font-size: 3rem;
          color: black;
        }
      }
      hr {
        margin: 10px 0;
        width: 100%;
      }
    }
    form {
      padding-top: 1rem;
      width: 100%;
      height: 190px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
