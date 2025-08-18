import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Description,
  Letter,
} from "./style.ts";

const ActiveLink = styled("a", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  textDecoration: "none",
  color: active
    ? theme.palette.mode === "dark"
      ? "#6c6eb3"
      : "#000000"
    : "#b3b3b3",
  cursor: "pointer",
  fontWeight: active ? 700 : 600,
  transition: "color 0.3s ease",
}));

const RTLTextWrapper = styled("span")<{ $isRTL: boolean }>(({ $isRTL }) => ({
  direction: $isRTL ? "rtl" : "ltr",
  display: "inline-block",
}));

// Define the section keys in one place (to sync EN/AR)
const sectionKeys = ["introduction", "skills", "history", "aspirations"];

function About() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [selectedLink, setSelectedLink] = useState("introduction");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <StyledContainer>
      <Title>{t("about_title")}</Title>
      <SubTitle>{t("about_subtitle")}</SubTitle>
      <StyledRow>
        <Letter>M</Letter>
        {!isMobile && (
          <StyledCol size={5} className="links-section">
            <ul>
              {sectionKeys.map((key, index) => (
                <li key={key}>
                  <ActiveLink
                    href={`/${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(key);
                      setSelectedLink(key);
                    }}
                    active={selectedLink === key}
                    data-index={formatNumber(index + 1)}
                  >
                    {`${formatNumber(index + 1)} ${t(`about_${key}_title`)}`}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </StyledCol>
        )}
        <StyledCol size={9} className="content-section">
          {sectionKeys.map((key, index) => (
            <div
              key={key}
              style={{
                display: isMobile || activeSection === key ? "block" : "none",
              }}
            >
              <h4>
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {`${formatNumber(index + 1)} ${t(`about_${key}_title`)}`}
                </RTLTextWrapper>
              </h4>
              <Description theme={theme}>
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {t(`about_${key}_description`)}
                </RTLTextWrapper>
              </Description>
            </div>
          ))}
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default About;
