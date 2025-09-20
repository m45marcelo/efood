import styled from "styled-components";

interface CustomTitleProps {
    fontWeight: string;
    fontStyle: string;
    fontSize: string;
    fontColor: string;
}

export const CustomTitle = styled.h2.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontWeight" && prop !== "fontStyle" && prop !== "fontSize" && prop !== "fontColor",
})<CustomTitleProps>`
    font-weight: ${({fontWeight}) => fontWeight};
    font-style: ${({fontStyle}) => fontStyle};
    font-size: ${({fontSize}) => fontSize};
    color: ${({fontColor}) => fontColor};
    line-height: 100%;
    letter-spacing: 0%;
`;
