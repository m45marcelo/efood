import theme from "../../../styles/theme";
import type { Prato } from "../../../types";
import { CustomButton } from "../CustomButton.styles";
import { CustomText } from "../Text/CustomText.styles";
import { CustomTitle } from "../Text/CustomTitle.styles";
import imageClose from "../../../assets/images/close.png";
import { Modal } from "./Modal.component";
import { ItemClose, ModalImage, ModalInfoContainer } from "./Modal.styles";
import { useAppDispatch } from "../../../hooks";
import { addToCart } from "../../../store/slices/carrinhoSlice";
import { formatCurrency } from "../../../utils/formatCurrency";

interface CenterModalProps {
    dishe: Prato | null;
    isOpen: boolean;
    closeModal: () => void;
    displayModal: string;
    justifyContent: "center" | "right";
    maxWidth: string;
    heightModal: string;
    paddingModal: string;
}

export const CenterModal: React.FC<CenterModalProps> = ({ ...props }) => {
    const dispatch = useAppDispatch();
    return (
        <Modal
            displayModal={props.displayModal}
            justifyContent={props.justifyContent}
            maxWidth={props.maxWidth}
            heightModal={props.heightModal}
            paddingModal={props.paddingModal}
            isOpen={props.isOpen}
        >
            <ItemClose
                onClick={() => props.closeModal()}
                src={imageClose}
                alt="imagem fechamento"
            />
            <ModalImage src={props.dishe?.foto} />
            <ModalInfoContainer>
                <CustomTitle
                    fontWeight="700"
                    fontSize="1.125rem"
                    fontStyle="Black"
                    fontColor="#fff"
                >
                    {props.dishe?.nome}
                </CustomTitle>
                <CustomText
                    fontWeight="400"
                    fontSize="0.875rem"
                    fontStyle="Regular"
                    lineHeight="1.375rem"
                    textHeight="11rem"
                    fontColor="#fff"
                >
                    {props.dishe?.descricao}
                </CustomText>

                <CustomText
                    fontWeight="400"
                    fontSize="0.875rem"
                    fontStyle="Regular"
                    lineHeight="1.375rem"
                    textHeight="11rem"
                    fontColor="#fff"
                >
                    {`Serve: de ${props.dishe?.porcao}`}
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
                    onClick={() =>
                        dispatch(addToCart(props.dishe), props.closeModal())
                    }
                >
                    {`Adicionar ao carrinho - ${formatCurrency(props.dishe?.preco)}`}
                </CustomButton>
            </ModalInfoContainer>
        </Modal>
    );
};
