import { CardPerfil } from "../components/common/CardPerfil/CardPerfil.component"
import { Footer } from "../components/layout/Footer/Footer.component"
import { Header } from "../components/layout/Header/Header.component"
import { Hero } from "../components/layout/Hero/Hero.component"
import { Main } from "../components/layout/Main/Main.component"

export const Perfil = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Main gap="21px">
                <CardPerfil/>
                <CardPerfil/>
                <CardPerfil/>
                <CardPerfil/>
                <CardPerfil/>
            </Main>
            <Footer/>
        </>
    )
}