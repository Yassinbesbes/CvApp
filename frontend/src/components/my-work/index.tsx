import React from "react";
import { sections } from "../../data/my-works.js"; // Import the data
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Image,
  Description,
  Title,
  ProjectTitle,
  SubTitle,
  TechList,
  TechListItem,
} from "./style.ts";

function MyWork() {
  return (
    <StyledContainer>
      <Title>My Works</Title>
      <SubTitle>I'm excited to share some of my recent projects</SubTitle>
      {Object.values(sections).map((section, index) => (
        <StyledRow key={index} reverse={index % 2 !== 0}>
          <StyledCol size={5} className="links-section">
            <Image src={section.image} alt={`${index + 1}`} />
          </StyledCol>
          <StyledCol size={9} className="content-section">
            <ProjectTitle>{section.title}</ProjectTitle>
            <Description>{section.description}</Description>
            <TechList>
              {section.techniques.map((tech, i) => (
                <TechListItem key={i}>{tech}</TechListItem>
              ))}
            </TechList>
          </StyledCol>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default MyWork;
