import React from 'react'
import styled from 'styled-components'
import { COLORS, SIZES } from '../theme'
import api from '../utils/api'

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

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await api.get('/users')
      console.log('result', result.data)
    } catch (error) {
      console.error(error.response.data)
    }
  }
  return (
    <LandingSection>
      <Title>Hello World !</Title>
      <button onClick={e => handleClick(e)}>Get users</button>
    </LandingSection>
  )
}

export default Home
