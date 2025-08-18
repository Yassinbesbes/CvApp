import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Descrip,
  Button,
  CVButton,
  Circle,
  Letter,
  StyledImage,
  StyledColContent,
  PopupOverlay,
  PopupContent,
  PopupButtonsWrapper,
  DownloadLink,
  CancelButton,
  RTLTextWrapper
} from "./style.ts";
import { DescripImg } from "../../images/images.js";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

function Description() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <>
      <StyledContainer theme={theme}>
        <StyledRow>
          <StyledCol className="links-section">
            <Title theme={theme}>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("description_title")}
              </RTLTextWrapper>
            </Title>
            <SubTitle>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("description_subtitle")}
              </RTLTextWrapper>
            </SubTitle>
            <Descrip theme={theme}>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("description_description")}
              </RTLTextWrapper>
            </Descrip>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button>
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {t("view_work")}
                </RTLTextWrapper>
              </Button>
              <CVButton onClick={() => setShowPopup(true)}>
                {t("cv_button")}
              </CVButton>
            </div>
          </StyledCol>

          <StyledColContent className="content-section">
            <Circle>
              <Letter>YB</Letter>
              <StyledImage src={DescripImg} alt="Description" />
            </Circle>
          </StyledColContent>
        </StyledRow>
      </StyledContainer>
      {showPopup && (
        <PopupOverlay theme={theme}>
          <PopupContent theme={theme}>
            <h3>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("download_cv_title")}
              </RTLTextWrapper>
            </h3>
            <p>
              <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                {t("download_cv_message")}
              </RTLTextWrapper>
            </p>
            <PopupButtonsWrapper>
              <DownloadLink
                href="/YassinBesbes_CV.pdf"
                download="YassinBesbes_CV.pdf"
                onClick={() => setShowPopup(false)}
                theme={theme}
              >
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {t("yes_download")}
                </RTLTextWrapper>
              </DownloadLink>
              <CancelButton 
                onClick={() => setShowPopup(false)}
                theme={theme}
              >
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {t("cancel")}
                </RTLTextWrapper>
              </CancelButton>
            </PopupButtonsWrapper>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}

export default Description;