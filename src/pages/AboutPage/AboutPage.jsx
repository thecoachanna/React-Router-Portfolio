import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";

const Body = styled.div`
  background: lavender;
  color: #3d3d3d;
`;

const AboutPage = () => {

  const [about, setAbout] = useState(["I am pursuing a new career path into Software Development after 6 years of working in the fitness industry because I was eager to diversify my skillset and ready to face new challenges.", "The experience that I've gained through years of coaching individuals and groups has helped me see how much I love building relationships, finding solutions, and being a life-long learner.", "Much like the fitness industry, Software Development is an ever-evolving field that requires continued education, creative problem solving, and being able to work with a team, which is why it has been a great fit for me."])

  return (
    <Body>
    <div>
      <h1>About Me</h1>
      
      {about.map((am) => {
        return <p>{am}</p>;
      })}
      
      </div>
      </Body>
  );
};

export default AboutPage;


