import { Logo } from "../../common/Logo.component";
import {
    FooterContainer,
    FooterContainerItems,
    FooterIcon,
    FooterIconsContainer,
} from "./Footer.styles";
import instagramImage from "./../../../assets/images/instagram.png";
import facebookImage from "./../../../assets/images/facebook.png";
import twitterImage from "./../../../assets/images/twitter.png";
import { CustomText } from "../../common/Text/CustomText.styles";
import theme from "../../../styles/theme";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContainerItems>
                <Logo />

                <FooterIconsContainer>
                    <FooterIcon src={instagramImage} alt="Imagem instagram" />
                    <FooterIcon src={facebookImage} alt="Imagem facebook" />
                    <FooterIcon src={twitterImage} alt="Imagem twitter" />
                </FooterIconsContainer>
                <CustomText
                    widthText="30rem"
                    fontColor={theme.colors.primary}
                    fontSize="0.625rem"
                    fontStyle="Regular"
                    fontWeight="400"
                    textAlign="center"
                >
                    A efood é uma plataforma para divulgação de
                    estabelecimentos, a responsabilidade pela entrega, qualidade
                    dos produtos é toda do estabelecimento contratado.
                </CustomText>
            </FooterContainerItems>
        </FooterContainer>
    );
};
