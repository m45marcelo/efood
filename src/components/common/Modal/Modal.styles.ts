import styled from "styled-components";
import theme from "../../../styles/theme";

interface ModalBackgroundProps {
    isOpen: boolean;
    justifyContent: "center" | "right";
}

interface ModalContainerProps {
    maxWidth: string;
    heightModal: string;
    paddingModal: string;
    displayModal: string;
}

export const ModalBackground = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "isOpen" && prop !== "justifyContent",
})<ModalBackgroundProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: center;
    z-index: 1000;
`;

export const ItemClose = styled.img`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 1rem;
    cursor: pointer;
`;

export const ModalContainer = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "maxWidth" &&
        prop !== "heightModal" &&
        prop !== "paddingModal" && 
        prop !== "displayModal"
})<ModalContainerProps>`
    position: relative;
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth};
    height: ${({heightModal}) => heightModal};
    padding: ${({paddingModal}) => paddingModal};
    display: ${({displayModal}) => displayModal};
    background-color: ${theme.colors.primary};
`;
export const ModalImage = styled.img`
    height: 100%;
    width: 100%;
    max-width: 17.5rem;
    object-fit: cover;
    object-position: center;
    margin-right: 1.5rem;
`;

export const ModalInfoContainer = styled.div`
    height: 256px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InfoItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 21.5rem;
`