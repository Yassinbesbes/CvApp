import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { DescripImg } from "../../images/images.js";
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
  SocialIcons,
  FooterSection,
  LinkList,
  NewsletterBox,
  NewsletterInput,
  NewsletterButton,
  Copyright,
} from "./style.ts";

function Footer() {
  const { contact, about, links, contactInfo, newsletter } = footer;

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

      <FooterSection>
        <StyledRow>
          <StyledCol>
            <h4>{about.title}</h4>
            <p>{about.description}</p>
            <SocialIcons>
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

          <StyledCol>
            <h4>{links.title}</h4>
            <LinkList>
              {links.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </LinkList>
          </StyledCol>

          <StyledCol>
            <h4>{contactInfo.title}</h4>
            <LinkList>
              {contactInfo.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </LinkList>
          </StyledCol>

          <StyledCol>
            <h4>{newsletter.title}</h4>
            <p>{newsletter.subtitle}</p>
            <NewsletterBox>
              <NewsletterInput placeholder={newsletter.placeholder} />
              <NewsletterButton>
                <FontAwesomeIcon icon={faPaperPlane} />
              </NewsletterButton>
            </NewsletterBox>
          </StyledCol>
        </StyledRow>
      </FooterSection>

      <Copyright>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </Copyright>
    </StyledContainer>
  );
}

export default Footer;
