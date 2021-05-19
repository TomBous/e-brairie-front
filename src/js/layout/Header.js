import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS, SIZES } from '../theme'

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.primary};
  color: ${COLORS.secondaryLighter};
  line-height: 2;
  font-size: ${SIZES.h4};
  font-weight: 500;
    .title {
        font-size: ${SIZES.h3};
        margin: 0 1em;
        color: ${COLORS.accent};
        font-weight: 700;
        text-shadow: 0px 0px 1px #555;
        letter-spacing: 0.2em;
        transform: rotate(-5deg);
        transition: all .2s ease-in-out;
        &:hover {
            transform: rotate(0deg);
            letter-spacing: 0.1em;
            cursor: pointer;
        }
    }
`;
const Nav = styled.nav`
    width: 400px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    p {
        padding: 0 .5em;
        &:hover {
            cursor: pointer;
            background-color: ${COLORS.primaryDarker}
        }
    }
    p > a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: ${COLORS.secondaryLighter};
        opacity: 0.9;
        padding: 1em 0em;
        margin: 0 1em;
        &::before {
            width: 100%;
            bottom: 3px;
            opacity: 0;
            transition: 300ms;
            height: 4px;
            content: "";
            position: absolute;
            background-color: ${COLORS.accent};
        }

        &:hover::before {
            bottom: 10px;
            opacity: 1;
        }
    }

`

const Header = () => {
    return (
        <HeaderBar>
            <div className="title">E-brairie</div>
            <Nav>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/register">Register</Link></p>
                <p><Link to="/login">Login</Link></p>
            </Nav>
        </HeaderBar>
    )
}

export default Header
