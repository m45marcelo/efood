import { Logo } from "../../common/Logo.component"
import { HeaderHomeContainer, HeaderHomeContainerItems, HeaderHomeText } from "./HeaderHome.styles"


export const HeaderHome = () => {
    return(
        <HeaderHomeContainer>
            <HeaderHomeContainerItems>
                <Logo/>
                <HeaderHomeText>Viva experiências gastronômicas no conforto da sua casa</HeaderHomeText>
            </HeaderHomeContainerItems>
        </HeaderHomeContainer>
    )
}