import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./scenes/home-page.jsx";
import Topbar from "./components/top-bar/index.jsx";

function App() {
  return (
    <>
      <Topbar />
      <HomePage />
    </>
  );
}

export default App;
