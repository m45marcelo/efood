import styled from "styled-components";
import theme from "../../../styles/theme";

interface CardInfoContainerProps {
    heightCard: string;
    gapCard: string;
    backgroundColor: string;
    paddingCard: string;
}

export const CardHomeContainer = styled.div`
    display: grid;
    height: 24.875rem;
    width: 100%;
    max-width: 29.5rem;
    position: relative;
    margin-bottom: 3rem;
`;

export const CardHomeImage = styled.img`
    height: 13.5625rem;
    width: 100%;
`;

export const ImageInfoContainer = styled.div`
    height: 1.625rem;
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 16px;
    right: 16px;
`;

export const CardHomeImageInfo = styled.div`
    height: 1.625rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text.secundary};
    border: 0;
    padding: 0.375rem 0.25rem;
    font-weight: 500;
    font-style: Bold;
    font-size: 0.75rem;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
`;

export const CardInfoContainer = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "heightCard" &&
        prop !== "gapCard" &&
        prop !== "backgroundColor" &&
        prop !== "paddingCard",
})<CardInfoContainerProps>`
    display: flex;
    flex-direction: column;
    gap: ${({gapCard}) => gapCard};
    height: ${({heightCard}) => heightCard};
    width: 100%;
    padding: ${({paddingCard}) => paddingCard};
    background-color: ${({backgroundColor}) => backgroundColor};
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: ${theme.colors.primary};
`;

export const CardInfoHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;
export const CardInfoHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
