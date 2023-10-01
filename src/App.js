import styled from "styled-components";
import Contact from "./components/Contact.js";
import Hero from "./components/Hero.js";
import NoPage from "./components/NoPage.js";
import Resume from "./components/Resume.tsx";
import Project from "./components/Project.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ResearchPaper from "./components/ResearchPaper.js";
import { Worker } from '@react-pdf-viewer/core';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none; /* For Firefox */
  color: white;
  background: url("./img/bg.jpeg");
  
  &::-webkit-scrollbar {
    width: 10px; /* You can set the width of the scrollbar here */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #da4ea2;
  }
`;

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <BrowserRouter>
      <Container >
        
      <Routes>
        <Route path="/" element ={<Hero />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element ={<Resume />} />
          <Route path="project" element={<Project />} />
          <Route path="research" element={<ResearchPaper />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </Container>
      </BrowserRouter>
      </Worker>

  );
}

export default App;
