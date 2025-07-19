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

export const StyledCol = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
  .links-section {
    position: relative;
    z-index: 1;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: 700;
  color: black;
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

export const Descrip = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: #535353;
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
    position: relative; /* Ensure it layers above the circle */
    z-index: 3; /* Layer above the circle and letter */
  }
`;
export const StyledColContent = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // Add any additional letter styles here if needed
`;

export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: 2;
  right: 0%;
  font-weight: 800;
  font-size: 700px;
  text-align: center; /* Center the letters together */

  /* Clip the text to show only half of the second letter */
  overflow: hidden;
  width: 1.7ch; /* Adjust this value to control how much of the second letter is shown */
  white-space: nowrap;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 300px;
    z-index: 0;
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
