import theme from "../../../styles/theme";
import { CustomTitle } from "../../common/Text/CustomTitle.styles";
import { HeroContainer } from "./Hero.styles";

export const Hero = () => {
    return (
        <HeroContainer>
            <CustomTitle
                fontSize="2rem"
                fontWeight="100"
                fontStyle="Thin"
                fontColor={theme.colors.text.white}
            >
                Italiana
            </CustomTitle>
            <CustomTitle
                fontSize="2rem"
                fontWeight="900"
                fontStyle="Black"
                fontColor={theme.colors.text.white}
            >
                La Dolce Vita Trattoria
            </CustomTitle>
        </HeroContainer>
    );
};
