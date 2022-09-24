import React, { useState } from "react";
import styled from "styled-components";
import "../../App.css";

const Body = styled.div`
  background: lavender;
  color: #3d3d3d;
`;

const SkillsPage = () => {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Express",
    "Node.js",
    "Mongoose",
    "Bootstrap",
    "React",
  ]);

  return (
    <Body>
      <div>
        <h1>Skills</h1>
        {skills.map((sk) => {
          return <p>{sk}</p>;
        })}
      </div>
    </Body>
  );
};

export default SkillsPage;
// useContext
