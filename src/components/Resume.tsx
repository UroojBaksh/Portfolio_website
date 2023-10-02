import React, { useState, useEffect } from "react";
import pdf from "../Assets/resumeee.pdf";
import styled from "styled-components";
import { Viewer } from '@react-pdf-viewer/core'; 
import { getFilePlugin} from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Navbar from "./Navbar";



  function ResumeNew() {
    const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  

    const [width, setWidth] = useState(1200);
    useEffect(() => {
      setWidth(window.innerWidth); 
    }, []);
  
  

  return (
    <div>
      <div style={{
        border:'300px',
        padding:'10px 0px 80px 80px',
        width: '65%',
        marginLeft:'350px',
        paddingRight:'0px'}} >
          <Navbar />
    <div
    className="rpv-core__viewer"
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
      
    }}
>
          
<div
            style={{
                flex: 1,
                overflowX: 'hidden',
                
            }}
        >
            <Viewer fileUrl={pdf} plugins={[getFilePluginInstance]} />
        </div>
                </div>
                </div>
                <div   style={{
                                
                                border: 'none',
                                display:'flex',
                                justifyContent:'center',
                                padding: '15px',
                            }}>
                <Download>
                   
                   { ( RenderDownloadProps) => (

                        <button
                            style={{
                                backgroundColor: '#357edd',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#ffffff',
                                cursor: 'pointer',
                                padding: '28px',
                                justifyContent:'center',
                            }}
                            onClick={RenderDownloadProps.onClick}
                        >
                            Download
                        </button>
                    )}
                </Download>
                </div>
    </div>
  );
    }  

export default ResumeNew;
