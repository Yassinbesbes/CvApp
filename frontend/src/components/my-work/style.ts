import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns vertically on mobile */
    align-items: center; /* Center content alignment */
  }
`;

export const StyledCol = styled.div<{ size?: number }>`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 25px;
  object-fit: cover; /* Ensure the image covers the area without stretching */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    height: auto; /* Adjust height based on aspect ratio */
  }
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: #535353;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #6C6EB3 0%, #426BC4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ProjectTitle = styled.h3`
  text-align: left;
  margin-bottom: 20px;
  font-weight: 600;
  background: linear-gradient(90deg, #6264B4FF 0%, #5177C9FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h6`
  text-align: center;
  margin-bottom: 50px;
`;

export const TechList = styled.ul`
  list-style-type: none; /* Remove default bullets */
  padding: 0; /* Remove default padding */
  margin: 0;
  gap: 10px;

`;

export const TechListItem = styled.li`
  display: inline;
  margin: 0;
  padding: 5px;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  border: none;
`;
