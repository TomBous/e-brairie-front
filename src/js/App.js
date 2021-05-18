import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from './layout/Header'
import { APP_INIT, APP_READY, APP_RESET, USER_IS_ADMIN } from './store/actions'
import { COLORS } from './theme'

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

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {

        dispatch({ type: APP_INIT })

        setTimeout(() => {
            dispatch({ type: APP_READY })
        }, 2000)
        setTimeout(() => {
            dispatch({ type: USER_IS_ADMIN })
        }, 3000)
    }, [])

    console.log('APP global state : ', appState)

    return (
        <>
            <Header />
            <LandingSection>
                <Title>Hello World !</Title>
            </LandingSection>
        </>
    )
}

export default App