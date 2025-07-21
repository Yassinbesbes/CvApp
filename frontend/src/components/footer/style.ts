import styled from "styled-components";

// Layout
export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

  // Existing classes
  &.links-section {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &.content-section {
    @media screen and (max-width: 767px) {
      flex: 100%;
    }
  }

  h4 {
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
  }

  p {
    color: #555;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const StyledColContent = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Titles
export const Title = styled.h1`
  text-align: left;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.5rem;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h6`
  text-align: left;
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 1.2rem;
  color: #666;
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
  position: relative;

  @media (max-width: 630px) {
    width: 200px;
    height: 200px;
  }
`;

export const CircleContact = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 630px) {
    width: 200px;
    height: 200px;
  }
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

// Image
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 3;
`;

// Footer add-ons
export const FooterSection = styled.div`
  background: white;
  padding: 60px 0;
  margin-top: auto;
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;

  a {
    color: #426bc4;
    transition: color 0.3s ease;
    font-size: 24px;

    &:hover {
      color: #6c6eb3;
    }
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #555;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 14px;

      &:hover {
        color: #000;
      }
    }
  }
`;

export const NewsletterBox = styled.div`
  display: flex;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: none;
  font-size: 14px;
  outline: none;
`;

export const NewsletterButton = styled.button`
  background: none;
  border: none;
  color: #426bc4;
  font-size: 20px;
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #6c6eb3;
  }
`;

export const Copyright = styled.div`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: auto;
`;
