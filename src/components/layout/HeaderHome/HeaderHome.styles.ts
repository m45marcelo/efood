import styled from "styled-components"
import vetor from "./../../../assets/images/Vector.png"
import theme from "../../../styles/theme"

export const HeaderHomeContainer = styled.header`
    width: 100%;
    height: 22.5rem;
    background-image: url(${vetor});
` 

export const HeaderHomeContainerItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
`

export const HeaderHomeText = styled.h1`
    color: ${theme.colors.primary};
    width: 100%;
    max-width: 33.6875rem;
    text-align: center;
    margin-top: 8.625rem;
`