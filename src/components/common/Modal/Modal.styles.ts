import styled from "styled-components";
import theme from "../../../styles/theme";

interface ModalBackgroundProps {
    displayModal: boolean;
}

export const ModalBackground = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "displayModal"
})<ModalBackgroundProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: ${({displayModal}) => displayModal ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ItemClose = styled.img`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 1rem;
    cursor: pointer;
`

export const ModalContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 64rem;
    height: 21.5rem;
    padding: 2rem 2rem;
    display: flex;
    background-color: ${theme.colors.primary};
`
export const ModalImage = styled.img`
    height: 100%;
    width: 100%;
    max-width: 17.5rem;
    object-fit: cover;
    object-position: center;
    margin-right: 1.5rem;
`

export const ModalInfoContainer = styled.div`
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
`