import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Skills from "./Skills";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import './assets/fonts.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} >
          <Route path="pcs" element=""/>
          <Route path="slpmcs" element=""/>
          <Route path="lnhses" element=""/>
          <Route path="dsas" element=""/>
          <Route path="svcp" element=""/>
          <Route path="pstc" element=""/>
          <Route path="esac" element=""/>
        </Route>
        <Route path="aboutme" element={<AboutMe />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);