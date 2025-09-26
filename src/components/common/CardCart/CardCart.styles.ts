import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

interface CardCartWarapperProps {
    cardQuantity: number;
}

export const CardCartWarapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "cardQuantity"
})<CardCartWarapperProps>`
    height: 20.75rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    gap: 1rem;
    ${({cardQuantity}) => 
    cardQuantity > 3 &&
    css`
        overflow-y: scroll;
    `  
}
`

export const CardCartContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 21.5rem;
    height: 6.25rem;
    padding: 0.5rem 0.5rem 0.75rem 0.5rem;
    display: flex;
    gap: 0.5rem;
    background-color: ${theme.colors.secundary};
    z-index: 0;
`

export const ImageCart = styled.img`
    height: 5rem;
    width: 100%;
    max-width: 5rem;
    object-fit: cover;
    object-position: center;
`

export const CardCartInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 3.6875rem;
`

export const ItemClose = styled.img`
    height: 1rem;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
`