import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Button } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { auth, createUser } from "../firebaseConfig";

const SignUp = ({ toggleSignUp, setToggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleCreateUser = (e) => {
    e.preventDefault();

    createUser(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setToggleSignUp(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      {toggleSignUp && (
        <Container>
          <Wrapper>
            <header>
              <h2>Sign Up</h2>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setToggleSignUp(false)}
              />
            </header>
            <hr />
            <Form onSubmit={handleCreateUser}>
              <TextField
                style={{ marginBottom: "1rem" }}
                placeholder="Email"
                type="email"
                inputProps={{ style: { fontSize: 15 } }}
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                style={{ marginBottom: "1rem" }}
                placeholder="Password"
                type="password"
                inputProps={{ style: { fontSize: 15 } }}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default SignUp;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    margin: 0 2rem;
  }
`;

const Wrapper = styled.div`
  width: 450px;
  background-color: white;
  box-shadow: 0 8px 10px lightgrey;

  header {
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 3rem;
      color: black;
    }
    svg {
      font-size: 3rem;
      color: #5f5f5f;
    }
  }
`;

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    display: flex;
    gap: 1rem;
  }
`;
