import './App.css';
import React, { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import styled from "styled-components";
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignupPage from './pages/SignupPage/SignupPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
//import all of your components to use them

const NavContainer = styled.nav`
  width: 100%;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;  
  padding-right: 10px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: rebeccapurple;
  padding-right: 7px;
  flex-direction: row;
  
`

// Need: LoginPage, SignUpPage, ProfilePage, AboutPage, SkillsPage, ContactMePage

function App() {
  return (
    <div className="App">
      
      <NavContainer>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Sign-up</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        
        </NavContainer>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="profile" replace />} />
      </Routes>
    </div>
  );
}

export default App;
