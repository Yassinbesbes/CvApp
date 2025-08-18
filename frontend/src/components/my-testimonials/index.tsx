import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
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
  const { t} = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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
    const totalItems = 4; // Number of testimonials
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
      <Title>{t("testimonials.title")}</Title>
      <Letter>T</Letter>
      <SubTitle theme={theme}>{t("testimonials.subtitle")}</SubTitle>

      <CarouselWrapper>
        <NavigationButton direction="prev" onClick={() => handleNavigation("prev")}>
          <ArrowIcon direction="prev" />
        </NavigationButton>

        <StyledRow ref={rowRef}>
          {[1, 2, 3, 4].map((testimonialNum, index) => (
            <StyledCol key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <Card
                isSelected={selectedIndex === index}
                onClick={() => handleCardClick(index)}
                theme={theme}
              >
                <Description theme={theme}>
                  {t(`testimonials.testimonial${testimonialNum}.description`)}
                </Description>
                <CustomerInfo>
                  <CustomerName theme={theme}>
                    {t(`testimonials.testimonial${testimonialNum}.name`)}
                  </CustomerName>
                  <CustomerPosition theme={theme}>
                    {t(`testimonials.testimonial${testimonialNum}.position`)}
                  </CustomerPosition>
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
        {[1, 2, 3, 4].map((_, index) => (
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