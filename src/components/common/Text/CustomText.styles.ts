import styled from "styled-components";

interface CustomTextProps {
    fontWeight: string;
    fontStyle: string;
    fontSize: string;
    fontColor: string;
    widthText?: string;
    textAlign?: string;
    lineHeight?: string;
}

export const CustomText = styled.p.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "fontWeight" &&
        prop !== "fontStyle" &&
        prop !== "fontSize" &&
        prop !== "fontColor" &&
        prop !== "widthText" &&
        prop !== "textAlign" &&
        prop !== "lineHeight"
})<CustomTextProps>`
    text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
    width: ${({widthText}) => widthText ? widthText : "100%"};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ fontColor }) => fontColor};
    line-height: ${({lineHeight}) => lineHeight ? lineHeight : "100%"};
    letter-spacing: 0%;
`;
