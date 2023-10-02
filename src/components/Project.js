import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const ProjectCard = styled.div`
  width: 600px;
  height: 560px;
  background-color: #080015;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 10px 3px #ccc;
  }
`;

const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  color:#da4ea2;
  padding:40px;
`;

const ProjectDescription = styled.p`
  font-size: 22px;
  padding :10px;
`;

const ProjectListContainer = styled.div`
text-align: justify;
flex: 1;
overflow-y: auto;
margin-bottom: 10px;
`;

const ProjectRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Project = () => {
  const [projects, setProjects] = useState([
    {
      title: "Sentimental Anlysis of Student Feedback",
      description: "This research aimed to compare different machine learning algorithms and deep learning techniques for developing an effective sentiment classification system for instructors. In this study, I analyzed student feedback consisting of 19000 comments and trained various machine learning and deep learning algorithms using several feature extraction techniques. Among the different algorithms employed, a cascading neural network consisting of CNN combined with LSTM using Glove word embedding outperformed all the other architecture giving an accuracy of 91.27 %.",
      link:"https://uroojbaksh-ba629.web.app/research",
    },
    {
      title: "Fake news Detection",
      description: "In this project we displayed the use machine learning algorithms for text classification. We worked on classifying whether the given news article is fake or real.For Classification prurpose we Used: Multinomial Naive Bayes, Support Vector Machine ( LinearSVC ), PassiveAgressiveClassifier. We compared the performance of the vectorizers as well as the classifiers. At the end, we are using an ensemble model to get a higher accuracy.",
      link:"https://github.com/UroojBaksh/Fake_news-detection",
    },
    {
      title: "Generating Insights to solve Supply Chain Issue",
      description: "AtliQ Mart is a growing FMCG manufacturer headquartered in Gujarat, India.AtliQ Mart is currently facing a problem where a few key customers did not extend the annual contract due to service issues.Created the metrics according to the metrics list. Created a dashboard according to the requirements provided by stakeholders in the business review meeting",
      link:"https://github.com/UroojBaksh/Supply_Chain_Analysis-FMCG_domain-",
    },
    {
      title: "AtliQ Grands Hospitality Analysis",
      description: "Skills Applied: ETL, Metric and KPI Definition, Exploratory Data Analysis, DAX, Data Analysis, Power Query, Insight Discovery, Data Storytelling, Data Visualization.",
      link:"https://github.com/UroojBaksh/Revenue_Insights_hospitality_Domain-Power_BI-",
    },
    {
      title: "Covid-19 Global Vaccine Tracker",
      description: "This is the description of Project 5.",
      link:"",
    },
    {
      title: "Customer Segmentation",
      description:"In this project, the objective was to gain business insights into monthly product sales and customer spending, reduce marketing risk, and enhance marketing efficiency through segmentation analysis. The methodology involved descriptive and graph analysis, as well as segment analysis. The project aimed to help the Business Development Team differentiate products, treat customers based on criteria, and provide recommendations based on segmentation, focusing on Best Customers, Loyal Customers, Almost Lost customers, and Lost Cheap Customers. ",
      link:"https://github.com/UroojBaksh/Customer-Segmentation",
    },
  ]);

  const handleHover = (project) => {
    setProjects((prevProjects) => {
      return prevProjects.map((p) => {
        if (p === project) {
          return { ...p, isHovered: true };
        } else {
          return { ...p, isHovered: false };
        }
      });
    });
  };
  
    
      const handleClick = (project) => {
        if (project.link) {
          window.open(project.link, '_blank');
        }
      };
    
  
  return (
    <div style ={{padding:'15px'}}>
<Navbar />
      <ProjectListContainer>
        <ProjectRow>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} onHover={() => handleHover(project)}>
              <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              </div>
              
              <Button onClick={() => handleClick(project)} >View</Button>
            </ProjectCard>
          ))}
        </ProjectRow>
        <ProjectRow>
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.title} onHover={() => handleHover(project)}>
              <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              </div>
              <Button onClick={() => handleClick(project)} >View</Button>
              
            </ProjectCard>
            
          ))}
        </ProjectRow>
      </ProjectListContainer>
    </div>
  );
};

export default Project;
