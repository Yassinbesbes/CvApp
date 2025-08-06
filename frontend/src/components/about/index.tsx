import React, { useState, useEffect } from "react";
import { sections } from "../../data/about.js";
import { useTheme } from "@mui/material/styles";

import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Description,
  Letter,
} from "./style.ts";

function About() {
    const theme = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [selectedLink, setSelectedLink] = useState("introduction");

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <StyledContainer theme={theme}>
      <Title>Me, Myself, And I</Title>
      <SubTitle>Learn More About Me</SubTitle>
      <StyledRow>
        <Letter>M</Letter>
        {!isMobile && (
          <StyledCol size={5} className="links-section">
            <ul>
              {Object.keys(sections).map((key, index) => (
                <li key={key}>
                  <a
                    href={`/${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(key);
                      setSelectedLink(key);
                    }}
                    className={selectedLink === key ? "active" : ""}
                    data-index={formatNumber(index + 1)}
                  >
                    {`${formatNumber(index + 1)} ${sections[key].title}`}
                  </a>
                </li>
              ))}
            </ul>
          </StyledCol>
        )}
        <StyledCol size={9} className="content-section">
          {Object.keys(sections).map((key) => (
            <div
              key={key}
              style={{
                display: isMobile || activeSection === key ? "block" : "none",
              }}
            >
              <h4>{`${formatNumber(Object.keys(sections).indexOf(key) + 1)} ${
                sections[key].title
              }`}</h4>
              <Description theme={theme}>{sections[key].description}</Description>
            </div>
          ))}
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default About;
