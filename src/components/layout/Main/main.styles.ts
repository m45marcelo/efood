import styled from "styled-components";

interface MainContentProps {
    gapMain?: string;
}

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3.5rem 0rem 4.5rem 0rem;
`

export const MainContent = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "gapMain"
})<MainContentProps>`
    display: flex;
    gap: ${({gapMain}) => gapMain};
    width: 100%;
    max-width: 64rem;
    flex-wrap: wrap;
    overflow: hidden;
`