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

interface CardProps {
  isSelected?: boolean;
}

interface DirectionProps {
  direction?: 'prev' | 'next';
}

export const StyledContainer = styled.div<ThemeProps>`
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const CarouselWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x proximity;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const StyledCol = styled.div`
  flex: 0 0 auto;
  padding: 0 10px;
  scroll-snap-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 5px;
    &:first-child {
      padding-left: 20px;
    }
    &:last-child {
      padding-right: 20px;
    }
  }
`;

export const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px;
  min-height: 250px;
  transition: all 0.3s ease;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${({ isSelected }) => isSelected ? '#9381ff' : 'transparent'};
  transform: ${({ isSelected }) => isSelected ? 'scale(1.02)' : 'scale(1)'};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) ${({ isSelected }) => isSelected ? 'scale(1.02)' : ''};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 280px;
    min-height: auto;
    margin: 0 2px;
  }
`;

export const Description = styled.p<ThemeProps>`
  text-align: justify;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
  flex-grow: 1;
`;

export const CustomerInfo = styled.div`
  margin-top: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CustomerName = styled.h6<ThemeProps>`
  text-align: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 600;
`;

export const SubTitle = styled.h6<ThemeProps>`
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const CustomerPosition = styled.h5<ThemeProps>`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const RadioButton = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #9381ff;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:checked {
    background-color: #9381ff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const RadioLabel = styled.label`
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
`;

export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: -1;
  right: -10%;
  font-weight: 800;
  font-size: 700px;
  text-align: center;
  overflow: hidden;
  width: 1.7ch;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;

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

export const NavigationButton = styled.button<DirectionProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 1;
  ${props => props.direction === 'prev' ? 'left: -20px;' : 'right: -20px;'}
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    ${props => props.direction === 'prev' ? 'left: -10px;' : 'right: -10px;'}
  }
`;

export const ArrowIcon = styled.span<DirectionProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid #9381ff;
  border-right: 2px solid #9381ff;
  transform: ${props => props.direction === 'prev' ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;