import React, { useState, useEffect } from "react";
import { sections } from "../../data/description.js";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Descrip,
  Button,
  CVButton,
  Circle,
  Letter,
  StyledImage,
  StyledColContent,
} from "./style.ts";
import { DescripImg } from "../../images/images.js";
import { useTheme } from "@mui/material/styles";

function Description() {
  const theme = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <>
      <StyledContainer theme ={theme}>
        <StyledRow>
          <StyledCol className="links-section">
            <Title theme={theme} >{sections.title}</Title>
            <SubTitle>{sections.subtitle}</SubTitle>
            <Descrip theme={theme} >{sections.description}</Descrip>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button>View My Work</Button>
              <CVButton onClick={() => setShowPopup(true)}>cv</CVButton>
            </div>
          </StyledCol>

          <StyledColContent className="content-section">
            <Circle>
              <Letter>YB</Letter>
              <StyledImage src={DescripImg} alt="Description" />
            </Circle>
          </StyledColContent>
        </StyledRow>
      </StyledContainer>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "10px",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <h3>{sections.buttons.downloadConfirmTitle}</h3>
            <p>{sections.buttons.downloadConfirmMessage}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <a
                href="/YassinBesbes_CV.pdf"
                download="YassinBesbes_CV.pdf"
                onClick={() => setShowPopup(false)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#426bc4",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {sections.buttons.yesDownload}
              </a>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {sections.buttons.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Description;
