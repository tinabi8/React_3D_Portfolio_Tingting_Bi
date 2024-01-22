import React from 'react';
import styled from 'styled-components';


const Section =styled.div`
  display: flex;
  justify-content: center; 
 

  @media only screen and (max-width:768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width:1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px; 
  }
  
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 80px;
  margin-left: 20px;
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
  margin-right: 20px;
  color: white; 
  font-weight: bold; 
  font-size: 16px; 

  
`;

const Icons = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`;

const Icon = styled.div`
   width: 20px;
`;

const SearchIcon = styled.img`
  width: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/logo.png" alt="my Logo"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons> 
          <Icon src="./img/search.png" alt="Search Icon"/>
          <Button>Hier Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar