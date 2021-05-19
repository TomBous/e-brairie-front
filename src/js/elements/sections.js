import styled from 'styled-components'
import { COLORS, SIZES } from '../theme'

const FullSectionImage = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url("${props => props.src}");
    background-size: cover;
`;

export { FullSectionImage }