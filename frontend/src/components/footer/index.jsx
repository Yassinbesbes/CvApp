import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { footer } from "../../data/footer.js";
import { useTheme } from "@mui/material/styles";
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

function Footer() {
  const theme = useTheme();
  const { about, links, contactInfo, newsletter } = footer;

  return (
    <StyledContainer theme={theme}>
      <FooterSection theme={theme}>
        <StyledRow>
          <StyledCol theme={theme}>
            <h4>{about.title}</h4>
            <p>{about.description}</p>
            <SocialIcons theme={theme}>
              <a
                href={about.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={about.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={about.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={about.socials.figma}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFigma} />
              </a>
            </SocialIcons>
          </StyledCol>

          <StyledCol theme={theme}>
            <h4>{links.title}</h4>
            <LinkList theme={theme}>
              {links.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </LinkList>
          </StyledCol>

          <StyledCol theme={theme}>
            <h4>{contactInfo.title}</h4>
            <LinkList theme={theme}>
              {contactInfo.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </LinkList>
          </StyledCol>

          <StyledCol theme={theme}>
            <h4>{newsletter.title}</h4>
            <p>{newsletter.subtitle}</p>
            <NewsletterBox theme={theme}>
              <NewsletterInput 
                theme={theme}
                placeholder={newsletter.placeholder} 
              />
              <NewsletterButton theme={theme}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </NewsletterButton>
            </NewsletterBox>
          </StyledCol>
        </StyledRow>
      </FooterSection>

      <Copyright theme={theme}>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </Copyright>
    </StyledContainer>
  );
}

export default Footer;