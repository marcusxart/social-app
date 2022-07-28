import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../features/loading/loadingSlice";
import { selectUser } from "../features/slices/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import variable from "../variable";
import SignUp from "./SignUp";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogIn = async (e) => {
    e.preventDefault();
    dispatch(toggleLoading(true));
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isLoggin", JSON.stringify({ isActive: "true" }));
      dispatch(toggleLoading(false));
      navigate("/home");
    } catch (err) {
      setError(err.message);
      alert(err.message);
      dispatch(toggleLoading(false));
    }
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
          <form onSubmit={handleLogIn}>
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

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
    @media screen and (max-width: 600px) {
      align-items: flex-start;
    }

    .wrap {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 2rem 1.5rem;
      border-radius: 1rem;
      @media screen and (max-width: 900px) {
        width: 350px;
      }

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

      @media screen and (max-width: 900px) {
        h2 {
          font-size: 2rem;
        }
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

    @media screen and (max-width: 900px) {
      flex: 2;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
