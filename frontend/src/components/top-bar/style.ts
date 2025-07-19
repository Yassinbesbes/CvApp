import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 662px) {
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

  @media (max-width: 662px) {
    display: none;
  }
`;
