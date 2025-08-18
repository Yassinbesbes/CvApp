import React from "react";
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Dashboard, DonationApp, SpeedConnection, FruitVeg } from "../../images/images";
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
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      image: Dashboard,
      techniques: ["React", "Express.js", "Node.js", "MySQL", "Nivo", "XAMPP"]
    },
    {
      id: 2,
      image: DonationApp,
      techniques: ["HTML", "CSS", "JavaScript", "Foundation"]
    },
    {
      id: 3,
      image: SpeedConnection,
      techniques: ["React", "Front-end", "Bootstrap"]
    },
    {
      id: 4,
      image: FruitVeg,
      techniques: ["React", "Bootstrap", "Front-end", "Foundation"]
    }
  ];

  return (
    <StyledContainer theme={theme}>
      <Title theme={theme}>{t('works.title')}</Title>
      <SubTitle theme={theme}>{t('works.subtitle')}</SubTitle>
      {projects.map((project, index) => (
        <StyledRow key={project.id} reverse={index % 2 !== 0} theme={theme}>
          <StyledCol size={5} className="links-section" theme={theme}>
            <Image src={project.image} alt={`Project ${project.id}`} />
          </StyledCol>
          <StyledCol size={9} className="content-section" theme={theme}>
            <ProjectTitle theme={theme}>
              {t(`works.project${project.id}.title`)}
            </ProjectTitle>
            <Description theme={theme}>
              {t(`works.project${project.id}.description`)}
            </Description>
            <TechList theme={theme}>
              {project.techniques.map((tech, i) => (
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