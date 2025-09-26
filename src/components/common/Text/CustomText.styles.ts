import styled from "styled-components";

interface CustomTextProps {
    textHeight: string;
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
        prop !== "textHeight" &&
        prop !== "fontWeight" &&
        prop !== "fontStyle" &&
        prop !== "fontSize" &&
        prop !== "fontColor" &&
        prop !== "widthText" &&
        prop !== "textAlign" &&
        prop !== "lineHeight"
})<CustomTextProps>`
    height: ${({textHeight}) => textHeight};
    text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
    width: ${({widthText}) => widthText ? widthText : "100%"};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ fontColor }) => fontColor};
    line-height: ${({lineHeight}) => lineHeight ? lineHeight : "100%"};
    letter-spacing: 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
`;
