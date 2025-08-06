import React from "react";
import { useTheme } from "@mui/material/styles";
import { DescripImg, SeekMake, TT, UIB, DG } from "../../images/images.js";
import { footer } from "../../data/footer.js";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  StyledImage,
  CircleContact,
  Circle,
  StyledColContent,
  CircleTitle,
  CompaniesSection,
  CompaniesTitle,
  CompaniesWrapper,
  CompanyLogo,
} from "./style.ts";

function Contact() {
  const theme = useTheme();
  const { contact } = footer;

  return (
    <StyledContainer theme={theme}>
      <StyledRow>
        <StyledCol className="links-section" theme={theme}>
          <Title theme={theme}>{contact.title}</Title>
          <SubTitle theme={theme}>{contact.subtitle}</SubTitle>
          <CircleContact>
            <CircleTitle>{contact.button}</CircleTitle>
          </CircleContact>
        </StyledCol>

        <StyledColContent className="content-section">
          <Circle>
            <StyledImage src={DescripImg} alt="Description" />
          </Circle>
        </StyledColContent>
      </StyledRow>

      <CompaniesSection theme={theme}>
        <CompaniesTitle theme={theme}>Companies Part Of</CompaniesTitle>
        <CompaniesWrapper>
          <CompanyLogo
            src={TT}
            alt="Tunisie Telecom"
            title="Tunisie Telecom – National telecom operator in Tunisia"
            theme={theme}
          />
          <CompanyLogo
            src={SeekMake}
            alt="SeekMake"
            title="SeekMake – Digital manufacturing platform"
            theme={theme}
          />
          <CompanyLogo
            src={UIB}
            alt="UIB"
            title="UIB – Union Internationale de Banques"
            theme={theme}
          />
          <CompanyLogo
            src={DG}
            alt="DigiGrowing"
            title="DigiGrowing – IT Services & Consulting"
            theme={theme}
          />
        </CompaniesWrapper>
      </CompaniesSection>
    </StyledContainer>
  );
}

export default Contact;
