import styled from "styled-components";

interface ThemeProps {
  theme: {
    palette: {
      mode: string;
      background: {
        default: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  };
}

// Layout
export const StyledContainer = styled.div<ThemeProps>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 0;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCol = styled.div<ThemeProps>`
  flex: 1;
  padding: 10px;
  min-width: 250px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  h4 {
    margin-bottom: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.mode === 'dark' ? theme.palette.text.primary : '#000000'};

  }

  p {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const FooterSection = styled.div<ThemeProps>`
  padding: 60px 0;
  margin-top: auto;
`;

export const SocialIcons = styled.div<ThemeProps>`
  margin-top: 20px;
  display: flex;
  gap: 15px;

  a {
    color: ${({ theme }) => theme.palette.mode === 'dark' ? '#a4a9fc' : '#426bc4'};
    transition: color 0.3s ease;
    font-size: 24px;

    &:hover {
      color: ${({ theme }) => theme.palette.mode === 'dark' ? '#6870fa' : '#6c6eb3'};
    }
  }
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const LinkList = styled.ul<ThemeProps>`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;

    a {
      color: ${({ theme }) => theme.palette.text.secondary};
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 14px;

      &:hover {
        color: ${({ theme }) => theme.palette.text.primary};
      }
    }
  }
`;

export const NewsletterBox = styled.div<ThemeProps>`
  display: flex;
  margin-top: 15px;
  border: 1px solid ${({ theme }) => theme.palette.mode === 'dark' ? '#444' : '#ccc'};
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
`;

export const NewsletterInput = styled.input<ThemeProps>`
  flex: 1;
  padding: 10px 15px;
  border: none;
  font-size: 14px;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.palette.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const NewsletterButton = styled.button<ThemeProps>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.mode === 'dark' ? '#a4a9fc' : '#426bc4'};
  font-size: 20px;
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.mode === 'dark' ? '#6870fa' : '#6c6eb3'};
  }
`;

export const Copyright = styled.div<ThemeProps>`
  padding: 20px 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
  margin-top: auto;
`;