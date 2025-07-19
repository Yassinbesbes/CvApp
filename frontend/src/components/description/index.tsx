import React from "react";
import { sections } from "../../data/description.js"; // Import the data
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Descrip,
  Button,
  Circle,
  Letter,
  StyledImage,
  StyledColContent,
} from "./style.ts"; // Adjust based on your actual file structure
import { DescripImg } from "../../images/images.js";

function Description() {
  const handleLearnMore = () => {
    console.log("Learn More clicked!");
  };

  return (
    <>
      <StyledContainer>
        <StyledRow>
          <StyledCol className="links-section">
            <Title>{sections.title}</Title>
            <SubTitle>{sections.subtitle}</SubTitle>
            <Descrip>{sections.description}</Descrip>
            <Button onClick={handleLearnMore}>View My Work</Button>
          </StyledCol>
          <StyledColContent className="content-section">
            <Circle>
              <StyledImage src={DescripImg} alt="Description" />
              <Letter>YB</Letter>
            </Circle>
          </StyledColContent>
        </StyledRow>
      </StyledContainer>
    </>
  );
}

export default Description;
