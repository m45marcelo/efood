import styled from "styled-components";
import theme from "../../../styles/theme";

interface ContainerAppProps {
    desableOverflow: boolean;
}

export const ContainerApp = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "desableOverflow"
})<ContainerAppProps>`
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100vh;
    overflow-y: ${({ desableOverflow }) => (desableOverflow ? "hidden" : "auto")};
`;
