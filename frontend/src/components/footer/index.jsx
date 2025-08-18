import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFigma,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  StyledContainer,
  StyledRow,
  StyledCol,
  SocialIcons,
  FooterSection,
  LinkList,
  NewsletterBox,
  NewsletterInput,
  NewsletterButton,
  Copyright,
} from "./style.ts";

const RTLTextWrapper = styled.span`
  direction: ${({ $isRTL }: { $isRTL: boolean }) => ($isRTL ? "rtl" : "ltr")};
  display: inline-block;
`;

function Footer() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <StyledContainer theme={theme}>
      <FooterSection theme={theme}>
        <StyledRow>
          {/* About */}
          <StyledCol theme={theme}>
            <h4>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_about_title")}
              </RTLTextWrapper>
            </h4>
            <p>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_about_description")}
              </RTLTextWrapper>
            </p>
            <SocialIcons theme={theme}>
              <a
                href="https://www.linkedin.com/in/yassinbesbes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/Yassinbesbes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://x.com/Yassin__Besbes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.figma.com/@yassin_besbes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFigma} />
              </a>
              <a
                href="https://stackoverflow.com/users/20609585/besbes-yassin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </SocialIcons>
          </StyledCol>

          {/* Quick Links */}
          <StyledCol theme={theme}>
            <h4>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_links_title")}
              </RTLTextWrapper>
            </h4>
            <LinkList theme={theme}>
              <li>
                <a href="#projects">{t("footer_links_projects")}</a>
              </li>
              <li>
                <a href="#skills">{t("footer_links_skills")}</a>
              </li>
              <li>
                <a href="#experience">{t("footer_links_experience")}</a>
              </li>
              <li>
                <a href="#education">{t("footer_links_education")}</a>
              </li>
            </LinkList>
          </StyledCol>

          {/* Contact Info */}
          <StyledCol theme={theme}>
            <h4>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_contact_title")}
              </RTLTextWrapper>
            </h4>
            <LinkList theme={theme}>
              <li>
                <a href="mailto:besbesyassin90@gmail.com">
                  {t("footer_contact_email")}
                </a>
              </li>
              <li>
                <a href="tel:+21620578373">{t("footer_contact_phone")}</a>
              </li>
              <li>
                <a href="#contact">{t("footer_contact_form")}</a>
              </li>
              <li>
                <a href="#references">{t("footer_contact_references")}</a>
              </li>
            </LinkList>
          </StyledCol>

          {/* Newsletter */}
          <StyledCol theme={theme}>
            <h4>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_newsletter_title")}
              </RTLTextWrapper>
            </h4>
            <p>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("footer_newsletter_subtitle")}
              </RTLTextWrapper>
            </p>
            <NewsletterBox theme={theme}>
              <NewsletterInput
                theme={theme}
                placeholder={t("footer_newsletter_placeholder")}
              />
              <NewsletterButton theme={theme}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </NewsletterButton>
            </NewsletterBox>
          </StyledCol>
        </StyledRow>
      </FooterSection>

      <Copyright theme={theme}>
        <p>
          <RTLTextWrapper $isRTL={i18n.language === "ar"}>
            © {new Date().getFullYear()} {t("footer_copyright")}
          </RTLTextWrapper>
        </p>
      </Copyright>
    </StyledContainer>
  );
}

export default Footer;
