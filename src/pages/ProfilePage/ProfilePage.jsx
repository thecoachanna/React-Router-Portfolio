import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";

const Body = styled.div`
  background: lavender;
  color: #3d3d3d;
`;

const ProfilePage = () => {

  const [profile, setProfile] = useState(["Anna Nettles", "Software Engineer", "General Assembly Student", "Atlanta, GA", ])

  return (
    <Body>
    <div>
      <h1>Profile Page</h1>      
      {profile.map((p) => {
          return <p>{p}</p>;
        })}
      </div>
      </Body>
  );
};

export default ProfilePage;
