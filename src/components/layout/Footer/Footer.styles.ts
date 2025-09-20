import styled from "styled-components";
import theme from "../../../styles/theme";

export const FooterContainer = styled.footer`
    height: 18.625rem;
    width: 100%;
    background-color: ${theme.colors.secundary};
`


export const FooterContainerItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
`

export const FooterIconsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
`
export const FooterIcon = styled.img`
    height: 24px;
    width: 24px;
`