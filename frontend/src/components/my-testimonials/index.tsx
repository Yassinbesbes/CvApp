import React, { useState, useRef, useEffect } from "react";
import { testimonialData } from "../../data/my-testimonials.js";
import { useTheme } from "@mui/material/styles";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Description,
  Title,
  CustomerName,
  SubTitle,
  CustomerPosition,
  Card,
  RadioContainer,
  RadioButton,
  RadioLabel,
  Letter,
  NavigationButton,
  ArrowIcon,
  CarouselWrapper,
  CustomerInfo,
} from "./style.ts";

function MyTestimonials() {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sections = testimonialData;

  const handleRadioChange = (index: number) => {
    setSelectedIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    const container = rowRef.current;
    if (card && container) {
      const scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    const totalItems = sections.length;
    const newIndex =
      direction === "prev"
        ? (selectedIndex - 1 + totalItems) % totalItems
        : (selectedIndex + 1) % totalItems;

    setSelectedIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    scrollToCard(index);
  };

  useEffect(() => {
    scrollToCard(selectedIndex);
  }, [selectedIndex]);

  return (
    <StyledContainer theme={theme}>
      <Title>My Testimonials</Title>
      <Letter>T</Letter>
      <SubTitle theme={theme}>I'm happy that you like my work and wish to share the feedback</SubTitle>

      <CarouselWrapper>
        <NavigationButton direction="prev" onClick={() => handleNavigation("prev")}>
          <ArrowIcon direction="prev" />
        </NavigationButton>

        <StyledRow ref={rowRef}>
          {sections.map((section, index) => (
            <StyledCol key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <Card
                isSelected={selectedIndex === index}
                onClick={() => handleCardClick(index)}
                theme={theme}
              >
                <Description theme={theme}>{section.description}</Description>
                <CustomerInfo>
                  <CustomerName theme={theme}>{section.Name}</CustomerName>
                  <CustomerPosition theme={theme}>{section.Position}</CustomerPosition>
                </CustomerInfo>
              </Card>
            </StyledCol>
          ))}
        </StyledRow>

        <NavigationButton direction="next" onClick={() => handleNavigation("next")}>
          <ArrowIcon direction="next" />
        </NavigationButton>
      </CarouselWrapper>

      <RadioContainer>
        {sections.map((_, index) => (
          <RadioLabel key={index}>
            <RadioButton
              type="radio"
              name="testimonial"
              checked={selectedIndex === index}
              onChange={() => handleRadioChange(index)}
            />
          </RadioLabel>
        ))}
      </RadioContainer>
    </StyledContainer>
  );
}

export default MyTestimonials;