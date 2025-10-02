import theme from "../../../styles/theme";
import type { Prato } from "../../../types";
import { CustomButton } from "../CustomButton.styles";

import { Modal } from "./Modal.component";
import { useAppSelector } from "../../../hooks";
import { CardCart } from "../CardCart/CardCart.component";
import { CardCartWarapper } from "../CardCart/CardCart.styles";
import { InfoItensContainer, ModalInfoContainer } from "./Modal.styles";
import { CustomText } from "../Text/CustomText.styles";
import { useMemo } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

interface RightModalProps {
    dishe: Prato | null;
    isOpen: boolean;
    closeModal: () => void;
    displayModal: string;
    justifyContent: "center" | "right";
    maxWidth: string;
    heightModal: string;
    paddingModal: string;
}

export const RightModal: React.FC<RightModalProps> = ({ ...props }) => {
    const dishes = useAppSelector((state) => state.carrinho.dishe);

    const totalValue = useMemo(
        () => dishes.reduce((acc, dishe) => acc + dishe.preco, 0),
        [dishes]
    );

    return (
        <Modal
            displayModal={props.displayModal}
            justifyContent={props.justifyContent}
            maxWidth={props.maxWidth}
            heightModal={props.heightModal}
            paddingModal={props.paddingModal}
            isOpen={props.isOpen}
        >
            {dishes.length > 0 ? (
                <CardCartWarapper cardQuantity={dishes.length}>
                    {dishes.map((dishe) => (
                        <CardCart
                            key={dishe.id}
                            disheId={dishe.id}
                            imageCard={dishe.foto}
                            title={dishe.nome}
                            price={dishe.preco}
                        />
                    ))}
                </CardCartWarapper>
            ) : (
                <CardCartWarapper cardQuantity={dishes.length}>
                    <CustomText
                    widthText="100%"
                    textHeight="1rem"
                    fontWeight="700"
                    fontStyle="Bold"
                    fontSize="0.875rem"
                    textAlign="center"
                    fontColor={theme.colors.secundary}
                >
                    Carrinho Vazio
                </CustomText>
                </CardCartWarapper>
            )}
            <ModalInfoContainer>
                <InfoItensContainer>
                    <CustomText
                        widthText="4.375rem"
                        textHeight="1rem"
                        fontWeight="700"
                        fontStyle="Bold"
                        fontSize="0.875rem"
                        fontColor={theme.colors.secundary}
                    >
                        Valor total
                    </CustomText>
                    <CustomText
                        widthText="auto"
                        textHeight="1rem"
                        fontWeight="700"
                        fontStyle="Bold"
                        fontSize="0.875rem"
                        fontColor={theme.colors.secundary}
                    >
                        {dishes.length > 0
                            ? formatCurrency(totalValue)
                            : "R$ 0.00"}
                    </CustomText>
                </InfoItensContainer>
                <CustomButton
                    widthButton="21.5rem"
                    paddingButton="0.375rem 0.4375rem"
                    fontSize="0.875rem"
                    fontWeight="700"
                    fontStyle="Regular"
                    fontColor={theme.colors.primary}
                    backgroundColor={theme.colors.secundary}
                    hoverColor={theme.colors.secundaryHover}
                    onClick={() => props.closeModal()}
                >
                    Continuar com a entrega
                </CustomButton>
            </ModalInfoContainer>
        </Modal>
    );
};
