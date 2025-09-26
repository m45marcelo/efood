import { type ReactNode } from "react";
import { ModalBackground, ModalContainer } from "./Modal.styles";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    displayModal: string;
    justifyContent: "center" | "right";
    maxWidth: string;
    heightModal: string;
    paddingModal: string;
}

export const Modal: React.FC<ModalProps> = ({ ...props }) => {
    return (
        <ModalBackground
            justifyContent={props.justifyContent}
            isOpen={props.isOpen}
        >
            <ModalContainer
                displayModal={props.displayModal}
                maxWidth={props.maxWidth}
                heightModal={props.heightModal}
                paddingModal={props.paddingModal}
            >
                {props.children}
            </ModalContainer>
        </ModalBackground>
    );
};
