import theme from "../../../styles/theme";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CustomText } from "../Text/CustomText.styles";
import { CustomTitle } from "../Text/CustomTitle.styles";
import { CardCartContainer, CardCartInfo, ImageCart, ItemClose } from "./CardCart.styles";
import imageTrash from "./../../../assets/images/lixeira.png";
import { useAppDispatch } from "../../../hooks";
import { deleteItemCart } from "../../../store/slices/carrinhoSlice";

interface CardCartProps {
    disheId: number;
    imageCard: string;
    title: string;
    price: number;
}
export const CardCart: React.FC<CardCartProps> = ({disheId ,imageCard, title, price}) => {
    const dispath = useAppDispatch();

    return(
        <CardCartContainer>
            <ImageCart src={imageCard} alt="imagem de um prato"/>
            <CardCartInfo>
                <CustomTitle fontWeight="900" fontStyle="Black" fontSize="1.125rem" fontColor={theme.colors.primary}>{title}</CustomTitle>
                <CustomText textHeight="22px" fontWeight="400" fontStyle="Regular" fontSize="0.875rem" fontColor={theme.colors.primary}>{formatCurrency(price)}</CustomText>
            </CardCartInfo>
            <ItemClose onClick={()=> dispath(deleteItemCart(disheId))} src={imageTrash} alt="imagem lixeira"/>
        </CardCartContainer>
    )
}