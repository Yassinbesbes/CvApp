import React from "react";
import { sections } from "../../data/my-works.js";
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  
  return (
    <StyledContainer theme={theme}>
      <Title theme={theme}>My Works</Title>
      <SubTitle theme={theme}>I'm excited to share some of my recent projects</SubTitle>
      {Object.values(sections).map((section, index) => (
        <StyledRow key={index} reverse={index % 2 !== 0} theme={theme}>
          <StyledCol size={5} className="links-section" theme={theme}>
            <Image src={section.image} alt={`${index + 1}`} />
          </StyledCol>
          <StyledCol size={9} className="content-section" theme={theme}>
            <ProjectTitle theme={theme}>{section.title}</ProjectTitle>
            <Description theme={theme}>{section.description}</Description>
            <TechList theme={theme}>
              {section.techniques.map((tech, i) => (
                <TechListItem key={i} theme={theme}>{tech}</TechListItem>
              ))}
            </TechList>
          </StyledCol>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default MyWork;