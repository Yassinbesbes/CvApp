import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #426bc4;
  }
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.text};
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileThemeButton = styled(ThemeButton)`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    margin-left: auto;
    margin-right: 15px;
  }
`;
