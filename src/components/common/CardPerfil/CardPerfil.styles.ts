import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardPerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 21.125rem;
    gap: 8px;
    width: 100%;
    max-width: 20rem;
    padding: 0.5rem 0.5rem;
    background-color: ${theme.colors.primary};
`
export const CardPerfilImage = styled.img`
    height: 10.4375rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;