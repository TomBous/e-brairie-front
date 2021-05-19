import styled from 'styled-components'
import { COLORS, SIZES } from '../theme'

const Button = styled.button`
    position: relative;
    border-radius: 10px;
    border: 2px solid ${props => props.primary ? COLORS.primary : COLORS.accent};
    color: ${props => props.primary ? COLORS.primary : COLORS.accent};
    padding: 8px 30px;
    margin: 5px 0;
    letter-spacing: 1px;
    background: none;
    z-index: 1;
    text-transform: uppercase;
    font-size: ${SIZES.h4};
    &:hover {
        cursor: pointer;
        color: ${COLORS.darkblue};
    }
    &::before {
        content: "";
        position: absolute;
        border-radius: 8px;
        background: ${props => props.primary ? COLORS.primary : COLORS.accent};
        bottom: 0;
        left: 0;
        right: 0;
        top: 100%;
        z-index: -1;
        transition: top 0.1s ease-in;
    }
    &:hover::before {
        top: 0;
    }
`;

const IconButton = styled.button`
`;

export { Button, IconButton }