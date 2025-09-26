import theme from "../../../styles/theme";
import { CustomTitle } from "../../common/Text/CustomTitle.styles";
import { HeroContainer, HeroContent } from "./Hero.styles";

interface HeroProps {
    category: string;
    title: string;
}

export const Hero: React.FC<HeroProps> = ({ category, title }) => {
    return (
        <HeroContainer>
            <HeroContent>
                <CustomTitle
                    fontSize="2rem"
                    fontWeight="100"
                    fontStyle="Thin"
                    fontColor={theme.colors.text.white}
                >
                    {category}
                </CustomTitle>
                <CustomTitle
                    fontSize="2rem"
                    fontWeight="900"
                    fontStyle="Black"
                    fontColor={theme.colors.text.white}
                >
                    {title}
                </CustomTitle>
            </HeroContent>
        </HeroContainer>
    );
};
