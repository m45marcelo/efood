import { Link } from "react-router-dom";
import theme from "../../../styles/theme";
import { CustomButton } from "../CustomButton.styles";
import { CustomText } from "../Text/CustomText.styles";
import { CustomTitle } from "../Text/CustomTitle.styles";
import star from "./../../../assets/images/star.png";
import {
    CardHomeContainer,
    CardHomeImage,
    CardHomeImageInfo,
    CardInfoContainer,
    CardInfoHeader,
    CardInfoHeaderWrapper,
    ImageInfoContainer,
} from "./CardHome.styles";

interface CardHomeProps {
    id: number;
    image: string;
    category: string;
    title: string;
    classification: number;
    description: string;
    isHighlighted: boolean;
}

export const CardHome: React.FC<CardHomeProps> = ({id ,image, category, title, classification, description, isHighlighted}) => {
    return (
        <CardHomeContainer>
            <CardHomeImage
                src={image}
                alt="Imagem restaurante"
            />
            <ImageInfoContainer>
                {
                    isHighlighted && (
                        <CardHomeImageInfo>
                            Destaque da semana
                        </CardHomeImageInfo>
                    )
                }
                <CardHomeImageInfo>{category}</CardHomeImageInfo>
            </ImageInfoContainer>

            <CardInfoContainer heightCard="181px" gapCard="1rem" paddingCard="0.5rem" backgroundColor="#fff">
                <CardInfoHeader>
                    <CustomTitle
                        fontSize="1.125rem"
                        fontWeight="700"
                        fontStyle="Bold"
                        fontColor={theme.colors.text.primary}
                    >
                        {title}
                    </CustomTitle>
                    <CardInfoHeaderWrapper>
                        <CustomTitle
                            fontSize="1.125rem"
                            fontWeight="700"
                            fontStyle="Bold"
                            fontColor={theme.colors.text.primary}
                        >
                            {classification}
                        </CustomTitle>
                        <img src={star} alt="Classificação" />
                    </CardInfoHeaderWrapper>
                </CardInfoHeader>

                <CustomText
                    textHeight="5.5rem"
                    fontSize="0.875rem"
                    fontWeight="400"
                    fontStyle="Regular"
                    fontColor={theme.colors.text.primary}
                    lineHeight="1.375rem"
                >
                    {description}
                </CustomText>

                <Link to={`/perfil/${id}`}>
                    <CustomButton
                        widthButton="5.125rem"
                        paddingButton="0.25rem 0.375rem"
                        fontSize="0.875rem"
                        fontWeight="500"
                        fontStyle="Bold"
                        fontColor={theme.colors.text.secundary}
                        backgroundColor={theme.colors.primary}
                        hoverColor={theme.colors.primaryhover}
                    >
                        Saiba mais
                    </CustomButton>
                </Link>
            </CardInfoContainer>
        </CardHomeContainer>
    );
};
