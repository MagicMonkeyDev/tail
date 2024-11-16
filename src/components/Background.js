import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: 
    linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,20,0,0.9) 100%),
    repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 1px,
      rgba(0, 255, 0, 0.1) 1px,
      rgba(0, 255, 0, 0.1) 2px
    );
  background-size: 100% 100%, 100px 100px;
  animation: scroll 20s linear infinite;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 255, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @keyframes scroll {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 0 0, 0 100%;
    }
  }
`;

function Background() {
  return <BackgroundWrapper />;
}

export default Background; 