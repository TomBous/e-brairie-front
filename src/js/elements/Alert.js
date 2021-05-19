import React from 'react'
import styled from 'styled-components'
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { COLORS, SIZES } from '../theme'



const Alert = ({ title, type = 'alert', children }) => {
    return (
        <AlertContainer type={type}>
            <div className="alert-header">
                {type === 'alert' ? <FaExclamationCircle /> : <FaCheckCircle />}
            </div>
            <div className="alert-content">
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </AlertContainer>
    )
}

export default Alert


const AlertContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    padding: 3%;
    display: flex;
    flex-flow: row wrap;
    background-color: ${props => props.type === "alert" ? COLORS.red : COLORS.green};
    color: ${COLORS.secondaryLighter};
    div,p {
        width: 100%;
    }
    .alert-header {
        width: 10%;
        display: flex;
        justify-content: left;
        align-items: center;
        > svg {
            margin-right: 10px;
            font-size: 1.3em;
        }
    }
    .alert-content {
        width: 90%;
    }
`;