import React, { useState, useEffect } from "react";
import pdf from "../Assets/researchpaperfinal.pdf"; // Import the PDF file
import styled from "styled-components";
// Import from react-pdf-js
import { Viewer } from '@react-pdf-viewer/core'; 
import Navbar from "./Navbar";
import '@react-pdf-viewer/core/lib/styles/index.css';

const Container = styled.div`
  width: 70%;
  margin-top:50px;
margin-left:300px;
`;

const CenteredRow = styled.div`
display: flex;
justify-content: center;

`;
const StyledViewer = styled(Viewer)`
  .rpv-core__text-layer-item {
    display: none !important;
  }
  display: flex;
  
 
`;
function ResearchPaper() {
  const [width, setWidth] = useState(900);
  const [totalPages, setTotalPages] = useState(17); // Set the total number of pages

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <CenteredRow>
        <div style={{ width: `${width}px` }}>
        
            <StyledViewer fileUrl={pdf} />
          </div>
        </CenteredRow>
      </Container>
    </div>
  );
}

export default ResearchPaper;
