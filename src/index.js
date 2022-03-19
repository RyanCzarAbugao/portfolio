import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Project2 from "./Projects/Slpmcs";
import Project4 from "./Projects/Dsas";
import Project7 from "./Projects/Esac";
import './assets/fonts.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/slpmcs" element={<Project2 />}/>
        <Route path="projects/lnhses" element=""/>
        <Route path="projects/dsas" element={<Project4 />}/>
        <Route path="projects/svcp" element=""/>
        <Route path="projects/pstc" element=""/>
        <Route path="projects/esac" element={<Project7 />}/>
        <Route path="aboutme" element={<AboutMe />} />
      </Route>
      <Route path='facebook' element={() => { 
          window.location.href = 'https://web.facebook.com/Ryan.bugz/'; 
      }}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);