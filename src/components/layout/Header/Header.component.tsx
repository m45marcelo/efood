import theme from "../../../styles/theme"
import { Logo } from "../../common/Logo.component"
import { CustomText } from "../../common/Text/CustomText.styles"
import { HeaderContainer } from "./Header.styles"


export const Header = () => {
    return(
        <HeaderContainer>
            <CustomText fontSize="1.125rem" fontWeight="900" fontStyle="Black" widthText="12.5rem" fontColor={theme.colors.primary}>
                Restaurantes
            </CustomText>
            <Logo/>
            <CustomText fontSize="1.125rem" fontWeight="900" fontStyle="Black" widthText="12.5rem"  fontColor={theme.colors.primary}>
                0 produto(s) no carrinho
            </CustomText>
        </HeaderContainer>
    )
}