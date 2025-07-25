import React from "react";
import Topbar from "../components/top-bar/index.jsx";
import Description from "../components/description/index.tsx";
import About from "../components/about/index.tsx";
import MyWork from "../components/my-work/index.tsx";
import MyTestimonials from "../components/my-testimonials/index.tsx";
import Contact from "../components/contact/index.jsx";
import Footer from "../components/footer/index.jsx";
import ScrollButton from "../helpers/scroll-button.jsx";

function HomePage() {
  return (
    <>
      <Topbar />
      <section id="home">
        <Description />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <MyWork />
      </section>
      <MyTestimonials />
      <Contact />
      <section id="footer">
        <Footer />
      </section>
      <ScrollButton />
    </>
  );
}

export default HomePage;
