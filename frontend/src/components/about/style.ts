import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

export const StyledCol = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;

  &.links-section {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &.links-section ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
  }

  &.links-section ul li {
    margin-bottom: 10px;
  }

  &.links-section ul li a {
    text-decoration: none;
    color: #b3b3b3;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }

  &.links-section ul li a.active {
  color: ${({ theme }) => theme.palette.mode === 'dark' ? theme.palette.text.primary : '#000000'};
  }

  &.content-section {
    flex: 1;
    @media screen and (max-width: 767px) {
      flex: 100%;
    }
  }

  &.content-section h4 {
    margin-top: 0;
    text-align: center;

    @media screen and (min-width: 767px) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: ${({ theme }) =>
  theme.palette.mode === "dark" ? theme.palette.text.primary : "#000000"};
`;

export const SubTitle = styled.h6`
  text-align: center;
  margin-bottom: 50px;
`;

export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: -1;
  left: -20%;
  font-weight: 800;
  font-size: 700px;
  text-align: center;
  overflow: hidden;
  width: 1.7ch;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 300px;
    z-index: -1;
    left: -30%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;
