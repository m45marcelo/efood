import { CardPerfilContainer } from "./CardPerfil.styles";
import image from "./../../../assets/images/image-prato.png";
import { CustomTitle } from "../Text/CustomTitle.styles";
import theme from "../../../styles/theme";

import { CustomText } from "../Text/CustomText.styles";
import { CustomButton } from "../CustomButton.styles";
export const CardPerfil = () => {
    return (
        <CardPerfilContainer>
            <img src={image} alt="Imagem rastaurante" />

            <CustomTitle
                fontSize="1rem"
                fontWeight="900"
                fontStyle="Black"
                fontColor={theme.colors.text.secundary}
            >
                Pizza Marguerita
            </CustomTitle>
            <CustomText
                fontSize="0.875rem"
                fontWeight="400"
                fontStyle="Regular"
                fontColor={theme.colors.text.secundary}
                lineHeight="1.375rem"
            >
                A clássica Marguerita: molho de tomate suculento, mussarela
                derretida, manjericão fresco e um toque de azeite. Sabor e
                simplicidade!
            </CustomText>
            <CustomButton fontSize="14px" fontColor={theme.colors.primary} widthButton="100%" paddingButton="5px 0px" fontWeight="700" fontStyle="Bold" backgroundColor={theme.colors.secundary} hoverColor={theme.colors.secundaryHover}>
                Adicionar ao carrinho
            </CustomButton>
        </CardPerfilContainer>
    );
};
