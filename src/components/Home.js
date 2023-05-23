import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: space-evenly;
`;

const Section = styled.section`
  padding: 2rem;

`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Section>
        <Heading>Upcoming Events</Heading>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
        </ul>
      </Section>

      <Section>
        <Heading>Merchandise</Heading>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Section>
    </Container>
  );
};

export default Home;
