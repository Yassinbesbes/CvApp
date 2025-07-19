import React from "react";
import Description from "../components/description/index.tsx";
import About from "../components/about/index.tsx";
import MyWork from "../components/my-work/index.tsx";
import MyTestimonials from "../components/my-testimonials/index.tsx";
import Footer from "../components/footer/index.jsx";
import ScrollToTopButton from "../helpers/scroll-button.jsx";

function HomePage() {
  return (
    <>
      <Description />
      <About />
      <MyWork />
      <MyTestimonials />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
