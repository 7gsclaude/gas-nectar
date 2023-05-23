import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MerchList from "./components/MerchList";
import Merch from "./components/Merch";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/merch/:id" element={<MerchList />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
