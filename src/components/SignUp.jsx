import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Button } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const SignUp = ({ toggleSignUp, setToggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCapitalize = (e) => {
    const value = e.target.value;
    const uppercaseWords = (str) =>
      str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
    const result = uppercaseWords(value);
    setName(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        password,
      });
      setToggleSignUp(false);
    } catch (err) {
      setError(err);
      alert(err.message);
      console.log(err);
    }
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
            <Form onSubmit={handleSubmit}>
              <TextField
                placeholder="Names"
                type="text"
                style={{ marginBottom: "1rem" }}
                inputProps={{ style: { fontSize: 15 } }}
                value={name}
                fullWidth
                onChange={handleCapitalize}
              />
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
