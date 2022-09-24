import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";

const SignupContainer = styled.div`
  background: lavender;
  padding: 20px;

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 100px;
    padding: 30px 50px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: sans-serif;
    font-size: 10px;
    margin: 20px 0px;
  }
`;

const SignupPage = () => {
  const [signup, setSignup] = useState([]);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  let handleChange = (event) => {
    setSignupData({ ...signupData, [event.target.id]: event.target.value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setSignup([
      ...signup,
      {
        LastName: signupData.lastName,
        firstName: signupData.firstName,
        username: signupData.username,
        password: signupData.password,
      },
    ]);
    setSignupData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <SignupContainer>
        <h1>Sign-up Page</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            <input
              placeholder="Last Name"
              type="text"
              id="lastName"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="username">
            <input
              placeholder="username"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="password"
              type="text"
              id="password"
              onChange={handleChange}
            />
          </label>
          <label>
            <input type="submit" className="submitButton" />
          </label>
        </form>
      </SignupContainer>
    </div>
  );
};

export default SignupPage;
