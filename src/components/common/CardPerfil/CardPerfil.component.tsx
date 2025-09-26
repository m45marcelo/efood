import { CardPerfilContainer, CardPerfilImage } from "./CardPerfil.styles";

import { CustomTitle } from "../Text/CustomTitle.styles";
import theme from "../../../styles/theme";
import { CustomText } from "../Text/CustomText.styles";
import { CustomButton } from "../CustomButton.styles";
import type React from "react";
import type { Prato } from "../../../types";

interface CardPerfilProps {
    onAddToCart: (dishe: Prato)=> void;
    dishe: Prato;
}

export const CardPerfil: React.FC<CardPerfilProps> = ({onAddToCart, dishe}) => {
    return (
        <CardPerfilContainer>
            <CardPerfilImage src={dishe.foto} alt="Imagem rastaurante" />

            <CustomTitle
                fontSize="1rem"
                fontWeight="900"
                fontStyle="Black"
                fontColor={theme.colors.text.secundary}
            >
                {dishe.nome}
            </CustomTitle>
            <CustomText
                textHeight="5.5rem"
                fontSize="0.875rem"
                fontWeight="400"
                fontStyle="Regular"
                fontColor={theme.colors.text.secundary}
                lineHeight="1.375rem"
            >
                {dishe.descricao}
            </CustomText>
            <CustomButton
                fontSize="0.875rem"
                fontColor={theme.colors.primary}
                widthButton="100%"
                paddingButton="0.3125rem 0rem"
                fontWeight="700"
                fontStyle="Bold"
                backgroundColor={theme.colors.secundary}
                hoverColor={theme.colors.secundaryHover}
                onClick={()=> onAddToCart(dishe)}
            >
                Adicionar ao carrinho
            </CustomButton>
        </CardPerfilContainer>
    );
};
