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
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.text.primary : "#000000"};

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
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 15px;
  display: flex;
  align-items: center;
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

/* Language Dropdown */
export const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const LanguageButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  border-radius: 50px;

  border: 1px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#555" : "#ccc")};
  background: ${(props) =>
    props.theme.palette.mode === "dark" ? "#333" : "#fff"};
  color: ${(props) => (props.theme.palette.mode === "dark" ? "#fff" : "#333")};

  font-size: 14px;
  font-weight: 600;
  user-select: none;
  cursor: pointer;

  transition: box-shadow 0.3s ease;
`;

export const FlagImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 8px;
  background: ${(props) =>
    props.theme.palette.mode === "dark" ? "#333" : "#fff"};
  border: 1px solid
    ${(props) => (props.theme.palette.mode === "dark" ? "#555" : "#ccc")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;

  background: ${(props) =>
    props.$selected
      ? props.theme.palette.mode === "dark"
        ? "#444"
        : "#f0f0f0"
      : props.theme.palette.mode === "dark"
      ? "#333"
      : "#fff"};

  color: ${(props) =>
    props.$selected
      ? props.theme.palette.mode === "dark"
        ? "#fff"
        : "#000"
      : props.theme.palette.mode === "dark"
      ? "#fff"
      : "#333"};

  font-weight: ${(props) => (props.$selected ? "600" : "400")};

  &:hover {
    background: ${(props) =>
      props.theme.palette.mode === "dark" ? "#555" : "#f5f5f5"};
  }
`;

export const RTLTextWrapper = styled.span<{ $isRTL: boolean }>`
  direction: ${(props) => (props.$isRTL ? "rtl" : "ltr")};
  display: inline-block;
`;
