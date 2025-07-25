import styled from "styled-components";

// === Layout ===
export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

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

export const StyledCol = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 250px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  &.links-section {
    @media (max-width: 767px) {
      display: none;
    }
  }

  &.content-section {
    @media (max-width: 767px) {
      flex: 100%;
    }
  }
`;

export const StyledColContent = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// === Titles ===
export const Title = styled.h1`
  text-align: left;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.5rem;
  background: linear-gradient(90deg, #6c6eb3, #426bc4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h6`
  text-align: left;
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 1.2rem;
  color: #666;
`;

export const CircleTitle = styled.h2`
  color: white;
  font-size: 50px;
  text-align: center;
  z-index: 4;
  position: absolute;

  @media (max-width: 630px) {
    font-size: 25px;
  }
`;

// === Circles ===
export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6c6eb3, #426bc4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 630px) {
    width: 200px;
    height: 200px;
  }
`;

export const CircleContact = styled(Circle)`
  background: linear-gradient(90deg, #6c6eb3, #426bc4);
`;

// === Image ===
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 3;
`;

// === Companies Section ===
export const CompaniesSection = styled.div`
  padding: 80px 0;
  text-align: center;
  background-color: #f4f6fa;
  position: relative;
  overflow: hidden;
`;

export const CompaniesTitle = styled.h3`
  font-size: 7rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.03);
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;
  font-weight: 900;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const CompaniesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const CompanyLogo = styled.img`
  height: 50px;
  max-width: 150px;
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.7;

  &:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
    opacity: 1;
  }
`;
