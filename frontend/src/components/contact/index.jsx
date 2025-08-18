import React from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { DescripImg, SeekMake, TT, UIB, DG } from "../../images/images.js";
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

const RTLTextWrapper = styled.span`
  direction: ${({ $isRTL }: { $isRTL: boolean }) => ($isRTL ? "rtl" : "ltr")};
  display: inline-block;
`;

function Contact() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <StyledContainer theme={theme}>
      <StyledRow>
        <StyledCol className="links-section" theme={theme}>
          <Title theme={theme}>
            <RTLTextWrapper $isRTL={i18n.language === "ar"}>
              {t("contact_title")}
            </RTLTextWrapper>
          </Title>
          <SubTitle theme={theme}>
            <RTLTextWrapper $isRTL={i18n.language === "ar"}>
              {t("contact_subtitle")}
            </RTLTextWrapper>
          </SubTitle>
          <CircleContact>
            <CircleTitle>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("contact_button")}
              </RTLTextWrapper>
            </CircleTitle>
          </CircleContact>
        </StyledCol>

        <StyledColContent className="content-section">
          <Circle>
            <StyledImage src={DescripImg} alt="Description" />
          </Circle>
        </StyledColContent>
      </StyledRow>

      <CompaniesSection theme={theme}>
        <CompaniesTitle theme={theme}>
          <RTLTextWrapper $isRTL={i18n.language === "ar"}>
            {t("companies_part_of")}
          </RTLTextWrapper>
        </CompaniesTitle>
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
