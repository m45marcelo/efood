import styled from "styled-components";

interface MainContainerProps {
    gapMain: string;
}

export const MainContainer = styled.main.withConfig({
    shouldForwardProp: (prop) => prop !== "gapMain"
})<MainContainerProps>`
    display: flex;
    justify-content: flex-start;
    gap: ${({gapMain}) => gapMain};
    width: 100%;
    padding: 3.5rem 10.6875rem 4.5rem 10.6875rem;
    flex-wrap: wrap;
    overflow: hidden;
`