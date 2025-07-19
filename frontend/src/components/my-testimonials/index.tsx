import React, { useState, useRef, useEffect } from "react";
import { sections } from "../../data/my-testimonials.js";
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
} from "./style.ts";

function MyTestimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const totalItems = Object.values(sections).length;

  const handleRadioChange = (index) => {
    setSelectedIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = (index) => {
    if (cardRefs.current[index] && rowRef.current) {
      const card = cardRefs.current[index];
      const container = rowRef.current;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = card.offsetLeft - (containerWidth - cardWidth) / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex = (selectedIndex - 1 + totalItems) % totalItems;
    } else {
      newIndex = (selectedIndex + 1) % totalItems;
    }

    setSelectedIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    scrollToCard(index);
  };

  useEffect(() => {
    scrollToCard(selectedIndex);
  }, [selectedIndex]);

  return (
    <StyledContainer>
      <Title>My Testimonials</Title>
      <Letter>T</Letter>

      <SubTitle>
        I'm happy that you like my work and wish to share the feedback
      </SubTitle>

      <CarouselWrapper>
        <NavigationButton
          direction="prev"
          onClick={() => handleNavigation("prev")}
        >
          <ArrowIcon direction="prev" />
        </NavigationButton>

        <StyledRow ref={rowRef}>
          {Object.values(sections).map((section, index) => (
            <StyledCol key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <Card
                isSelected={selectedIndex === index}
                onClick={() => handleCardClick(index)}
                style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable
              >
                <Description>{section.description}</Description>
                <CustomerName>{section.Name}</CustomerName>
                <CustomerPosition>{section.Position}</CustomerPosition>
              </Card>
            </StyledCol>
          ))}
        </StyledRow>

        <NavigationButton
          direction="next"
          onClick={() => handleNavigation("next")}
        >
          <ArrowIcon direction="next" />
        </NavigationButton>
      </CarouselWrapper>

      <RadioContainer>
        {Object.values(sections).map((_, index) => (
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
