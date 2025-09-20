import styled from "styled-components";

interface CustomButtonProps {
    widthButton: string;
    paddingButton: string;
    fontWeight: string;
    fontStyle: string;
    fontSize: string;
    fontColor: string;
    backgroundColor: string;
    hoverColor: string;
}

export const CustomButton = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "widthButton" &&
        prop !== "paddingButton" &&
        prop !== "fontWeight" &&
        prop !== "fontStyle" &&
        prop !== "fontSize" &&
        prop !== "fontColor" &&
        prop !== "backgroundColor" &&
        prop !== "hoverColor"
})<CustomButtonProps>`
    width: ${({widthButton}) => widthButton};
    padding: ${({paddingButton}) => paddingButton};
    font-weight: ${({fontWeight}) => fontWeight};
    font-style: ${({fontStyle}) => fontStyle};
    font-size: ${({fontSize}) => fontSize};
    color: ${({fontColor}) => fontColor};
    background-color: ${({backgroundColor}) => backgroundColor};
    border: 0;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;

    &:hover{
        background-color: ${({hoverColor}) => hoverColor};
    }
`;
