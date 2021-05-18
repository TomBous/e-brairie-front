import React from 'react'
import styled from 'styled-components'
import { COLORS, SIZES } from '../theme'

const Nav = styled.header`
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

    ul {
        width: 400px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        li {
            text-decoration: none;
            list-style: none;
            padding: 0 .5em;
            &:hover {
                cursor: pointer;
                background-color: ${COLORS.primaryDarker}
            }
        }
        li > span {
            display: inline-block;
            position: relative;
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
    }
`;

const Header = () => {
    return (
        <Nav>
            <div className="title">E-brairie</div>
            <ul>
                <li><span>Item 1</span></li>
                <li><span>Panier</span></li>
                <li><span>Mon compte</span></li>
            </ul>
        </Nav>
    )
}

export default Header
