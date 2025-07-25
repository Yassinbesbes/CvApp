import React from "react";
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
  const { contact } = footer;

  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol className="links-section">
          <Title>{contact.title}</Title>
          <SubTitle>{contact.subtitle}</SubTitle>
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

      <CompaniesSection>
        <CompaniesTitle>Companies Part Of</CompaniesTitle>
        <CompaniesWrapper>
          <CompanyLogo src={TT} alt="Tunisie Telecom" title="Tunisie Telecom – National telecom operator in Tunisia" />
          <CompanyLogo src={SeekMake} alt="SeekMake" title="SeekMake – Digital manufacturing platform" />
          <CompanyLogo src={UIB} alt="UIB" title="UIB – Union Internationale de Banques" />
          <CompanyLogo src={DG} alt="DigiGrowing" title="DigiGrowing – IT Services & Consulting" />
        </CompaniesWrapper>
      </CompaniesSection>
    </StyledContainer>
  );
}

export default Contact;
