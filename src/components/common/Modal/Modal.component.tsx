import theme from "../../../styles/theme";
import type { Prato } from "../../../types";
import { CustomButton } from "../CustomButton.styles";
import { CustomText } from "../Text/CustomText.styles";
import { CustomTitle } from "../Text/CustomTitle.styles";
import imageClose from "../../../assets/images/close.png";
import {
    ItemClose,
    ModalBackground,
    ModalContainer,
    ModalImage,
    ModalInfoContainer,
} from "./Modal.styles";

interface ModalProps {
    dishe: Prato | null;
    isOpen: boolean;
    closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ dishe, isOpen, closeModal }) => {
    return (
        <ModalBackground displayModal={isOpen}>
            <ModalContainer>
                <ItemClose onClick={() => closeModal()} src={imageClose} alt="imagem fechamento"/>
                <ModalImage src={dishe?.foto} />
                <ModalInfoContainer>
                    <CustomTitle
                        fontWeight="700"
                        fontSize="1.125rem"
                        fontStyle="Black"
                        fontColor="#fff"
                    >
                        {dishe?.nome}
                    </CustomTitle>
                    <CustomText
                        fontWeight="400"
                        fontSize="0.875rem"
                        fontStyle="Regular"
                        lineHeight="1.375rem"
                        textHeight="11rem"
                        fontColor="#fff"
                    >
                        {dishe?.descricao}
                    </CustomText>

                    <CustomText
                        fontWeight="400"
                        fontSize="0.875rem"
                        fontStyle="Regular"
                        lineHeight="1.375rem"
                        textHeight="11rem"
                        fontColor="#fff"
                    >
                        {`Serve: de ${dishe?.porcao}`}
                    </CustomText>

                    <CustomButton
                        widthButton="13.625rem"
                        paddingButton="0.375rem 0.4375rem"
                        fontSize="0.875rem"
                        fontWeight="700"
                        fontStyle="Regular"
                        fontColor={theme.colors.primary}
                        backgroundColor={theme.colors.secundary}
                        hoverColor={theme.colors.secundaryHover}
                    >
                        {`Adicionar ao carrinho - R$ ${dishe?.preco}`}
                    </CustomButton>
                </ModalInfoContainer>
            </ModalContainer>
        </ModalBackground>
    );
};
