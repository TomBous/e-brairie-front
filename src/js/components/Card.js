import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS, SIZES } from '../theme'
import { Button } from '../elements/buttons'

const LoginCard = styled.div`
    width: 400px;
    display: flex;
    flex-flow: column wrap;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    > div {
        padding: 1em;
    }
    .content {
        background-color: ${COLORS.secondaryLighter};
        transition: all 1s ease-in;
        padding: 2em;
    }
    .header {
        border-radius: 15px 15px 0 0;
        background-color: ${COLORS.primary};
        text-align: center;
        color: ${COLORS.secondaryLighter}
    }
    .footer {
        border-radius: 0 0 15px 15px;
        background-color: ${COLORS.primary};
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }
    input {
        margin : 1em 0;
        color: ${COLORS.darkgrey}  
    }
    a {
        color: ${COLORS.secondaryLighter};
    }
`;

const Card = ({ title, button, link, url, children }) => {
    return (
        <LoginCard>
            <div className="header">
                <h1>{title}</h1>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <Button type="submit">{button}</Button>
                <Link to={url}>{link}</Link>
            </div>
        </LoginCard>
    )
}

export default Card
