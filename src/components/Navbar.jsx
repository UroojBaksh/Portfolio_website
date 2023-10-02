import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Section = styled.div`
  display: flex;
  justify-content: center;
  margin:20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 0px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;  /* This will remove the underline */
  font-weight: 500;
  font-size: 25px;
  &:hover {
    text-decoration: underline;
    color:#da4ea2;
`;
const StyleddLink = styled(Link)`
  color: white;
  text-decoration: none;  /* This will remove the underline */
  font-weight: 500;
  font-size: 25px;
  &:hover {
    text-decoration: underline;
    opacity: 0.5;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  color: white;
`;

const Logo = styled.img`
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/Capturelogo.PNG" />
        
          <List>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/research">Research</StyledLink>
          <StyledLink to="/project">Projects</StyledLink>
          <StyledLink to="/resume">Resumee</StyledLink> 
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/mail.png" />
          <Button><StyleddLink to="/contact" >Hire Now </StyleddLink></Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
