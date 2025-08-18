import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

export const StyledCol = styled.div<{ size?: number }>`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
  .links-section {
    position: relative;
    z-index: 1;
  }
`;

export const Title = styled.h1<{ theme: any }>`
  text-align: left;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.text.primary : "#000000"};
`;

export const SubTitle = styled.h1`
  text-align: left;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Descrip = styled.p<{ theme: any }>`
  text-align: justify;
  margin-bottom: 20px;
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.text.primary : "#000000"};
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 662px) {
    position: relative;
    z-index: 3;
  }
`;

export const CVButton = styled.button`
  background-color: white;
  color: #426bc4;
  padding: 16px 28px;
  border: 1px solid #426bc4;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 0 12px 4px #426bc4;
    transform: scale(1.03);
  }
`;

export const StyledColContent = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: 0;
  right: 0%;
  font-weight: 800;
  font-size: 700px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  overflow: hidden;
  width: 1.7ch;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 300px;
    right: -0%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 630px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 3;
`;

export const PopupOverlay = styled.div<{ theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.5)"};
  display: flex;
  justify-content: center;
  align-items: center; // Fixed typo here
  z-index: 1000;
  padding: 20px; // Add padding for mobile
`;

export const PopupContent = styled.div<{ theme: any }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.background.paper : "#fff"};
  padding: 2rem;
  border-radius: 10px;
  width: 90%; // Use percentage width for responsiveness
  max-width: 400px;
  text-align: center;
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.text.primary : "#111"};
  box-shadow: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? theme.shadows[10]
      : "0 4px 20px rgba(0,0,0,0.2)"};
  margin: 0 auto; // Center the popup

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.5;
    word-break: break-word; // Prevent text overflow
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 95%;

    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const PopupButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap; // Allow buttons to wrap on small screens

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const DownloadLink = styled.a<{ theme: any }>`
  padding: 10px 20px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.primary.main : "#426bc4"};
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  min-width: 120px; // Set minimum width for buttons
  display: inline-block;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button<{ theme: any }>`
  padding: 10px 20px;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#f0f0f0"};
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? theme.palette.text.primary : "#111"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.2s;
  min-width: 120px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const RTLTextWrapper = styled.span<{ $isRTL: boolean }>`
  direction: ${({ $isRTL }) => ($isRTL ? "rtl" : "ltr")};
  display: inline-block;
`;
