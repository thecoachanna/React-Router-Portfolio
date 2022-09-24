import React, { useState, Link } from "react";
import "../../App.css";
import styled from "styled-components";


const Body = styled.div`
  background: lavender;
  color: #3d3d3d;
`;

const ContactPage = () => {

  const [contact, setContact] = useState(["nettles.anna@gmail.com", "linkedin.com/in/thecoachanna", "github.com/thecoachanna"])

  return (
    <Body>
    <>
      <h1>Contact Me</h1>

      {contact.map((cm) => {
        return <p>{ cm }</p>
      })
      }
      
      </>
      </Body>
  );
};

export default ContactPage;
