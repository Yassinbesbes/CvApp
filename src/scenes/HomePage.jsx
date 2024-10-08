import React from "react";
import Description from "../components/Description/index.tsx";
import About from "../components/About/index.tsx";
import MyWork from "../components/MyWork/index.tsx";
import MyTestimonials from "../components/MyTestimonials/index.tsx";
import Footer from "../components/Footer/index.jsx";
function HomePage() {
  return (
    <>
      <Description />
      <About />
      <MyWork />
      <MyTestimonials />
      <Footer />
    </>
  );
}

export default HomePage;
