import theme from "../../../styles/theme";
import { Logo } from "../../common/Logo.component";
import { CustomText } from "../../common/Text/CustomText.styles";
import { HeaderContainer, HeaderContent } from "./Header.styles";
import { useAppSelector } from "../../../hooks";

interface HeaderProps {
    openModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({openModal}) => {
    const quantityItens = useAppSelector((state) => state.carrinho.dishe)
    return (
        <HeaderContainer>
            <HeaderContent>
                <CustomText
                    fontSize="1.125rem"
                    fontWeight="900"
                    fontStyle="Black"
                    widthText="12.5rem"
                    textHeight="1.3125rem"
                    fontColor={theme.colors.primary}
                >
                    Restaurantes
                </CustomText>
                <Logo />
                <CustomText
                    isLink
                    fontSize="1.125rem"
                    fontWeight="900"
                    fontStyle="Black"
                    widthText="12.5rem"
                    textHeight="1.3125rem"
                    fontColor={theme.colors.primary}
                    onClick={() => openModal()}
                >
                    {`${quantityItens.length} produto(s) no carrinho`}
                </CustomText>
            </HeaderContent>
        </HeaderContainer>
    );
};
