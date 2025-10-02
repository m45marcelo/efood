import { ClipLoader } from "react-spinners"
import { LoaderContainer } from "./Loader.styles"
import theme from "../../../styles/theme"

export const Loader = () => {
    return(
        <LoaderContainer>
            <ClipLoader color={theme.colors.primary}/>
        </LoaderContainer>
    )
}