import React from 'react'
import styled from 'styled-components'
import { COLORS, SIZES } from '../theme'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;
const LandingSection = styled.section`
  width: 100%;
  background-color: ${COLORS.secondary};
  height: 50vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;


const Home = () => {
    return (
        <LandingSection>
            <Title>Hello World !</Title>
        </LandingSection>
    )
}

export default Home
