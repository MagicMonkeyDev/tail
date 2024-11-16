import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';

const GlowingBox = styled(Box)`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const CyberInput = styled(Input)`
  background: rgba(0, 0, 0, 0.5) !important;
  border: 1px solid #00ff00 !important;
  color: #00ff00 !important;
  &:focus {
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5) !important;
  }
`;

const CyberButton = styled(Button)`
  background: #00ff00 !important;
  color: black !important;
  &:hover {
    background: #00cc00 !important;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  }
`;

function CoinGenerator() {
  const [coinIdea, setCoinIdea] = useState('');
  
  const handleSubmit = async () => {
    // Will implement API call later
    console.log('Generating coin:', coinIdea);
  };

  return (
    <VStack spacing={8} py={10}>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="#00ff00"
        textShadow="0 0 10px rgba(0, 255, 0, 0.5)"
      >
        AI Coin Generator
      </Text>
      
      <GlowingBox w="100%" maxW="600px">
        <VStack spacing={4}>
          <Text color="#00ff00">Describe your coin idea:</Text>
          <CyberInput
            placeholder="e.g., A meme coin based on cyber cats..."
            value={coinIdea}
            onChange={(e) => setCoinIdea(e.target.value)}
          />
          <CyberButton onClick={handleSubmit}>
            Generate Coin
          </CyberButton>
        </VStack>
      </GlowingBox>
    </VStack>
  );
}

export default CoinGenerator; 