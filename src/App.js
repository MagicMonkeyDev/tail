import React from 'react';
import styled from 'styled-components';
import { ChakraProvider, Container } from '@chakra-ui/react';
import CoinGenerator from './components/CoinGenerator';
import Background from './components/Background';

const AppWrapper = styled.div`
  min-height: 100vh;
  color: #00ff00;
  background: #000;
  position: relative;
  overflow: hidden;
`;

function App() {
  return (
    <ChakraProvider>
      <AppWrapper>
        <Background />
        <Container maxW="container.xl">
          <CoinGenerator />
        </Container>
      </AppWrapper>
    </ChakraProvider>
  );
}

export default App; 