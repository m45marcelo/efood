import { useLocation } from "react-router-dom";
import { CardPerfil } from "../components/common/CardPerfil/CardPerfil.component";
import { Footer } from "../components/layout/Footer/Footer.component";
import { Header } from "../components/layout/Header/Header.component";
import { Hero } from "../components/layout/Hero/Hero.component";
import { Main } from "../components/layout/Main/Main.component";
import { getPageNumber } from "../utils/getPageNumber";
import { useEffect, useState } from "react";
import { type Prato, type Restaurant } from "../types";
import { CenterModal } from "../components/common/Modal/CenterModal.component";
import { RightModal } from "../components/common/Modal/RightModal.component";
import { Container } from "../components/layout/Container/Container.component";

export const Perfil = () => {
    const { pathname } = useLocation();
    const pageNumber = Number(getPageNumber(pathname));
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [selectDishe, setSelectDishe] = useState<Prato | null>(null);
    const [modalCenterState, setModalCenterState] = useState<boolean>(false);
    const [modalRightState, setModalRightState] = useState<boolean>(false);
    const restaurantMatch: Restaurant | undefined = restaurants.find(
        (restaurant) => restaurant.id == pageNumber
    );

    function handleAddToCart(dishe: Prato) {
        setSelectDishe(dishe);
        setModalCenterState(true);
    }

    function handleCloseModalCenter() {
        setModalCenterState(false);
    }

    function handleOpenModalRight() {
        setModalRightState(true);
    }

    function handleCloseModalRight() {
        setModalRightState(false);
    }

    async function buscarDados() {
        try {
            const response = await fetch(
                "https://ebac-fake-api.vercel.app/api/efood/restaurantes"
            );
            const data: Restaurant[] = await response.json();
            setRestaurants(data);
        } catch (error) {
            console.error("Erro", error);
        }
    }

    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <Container overflow={modalRightState}>
            <Header openModal={handleOpenModalRight} />
            {restaurantMatch && (
                <Hero
                    category={restaurantMatch.tipo}
                    title={restaurantMatch.titulo}
                />
            )}

            <Main gap="2rem">
                {restaurantMatch &&
                    restaurantMatch.cardapio.map((dishe) => (
                            <CardPerfil
                                key={dishe.id}
                                dishe={dishe}
                                onAddToCart={handleAddToCart}
                            />
                    ))}
                <CenterModal
                    closeModal={handleCloseModalCenter}
                    dishe={selectDishe}
                    isOpen={modalCenterState}
                    displayModal="flex"
                    maxWidth="64rem"
                    justifyContent="center"
                    heightModal="21.5rem"
                    paddingModal="2rem 2rem"
                />
                <RightModal
                    closeModal={handleCloseModalRight}
                    dishe={selectDishe}
                    isOpen={modalRightState}
                    displayModal="grid"
                    maxWidth="360px"
                    justifyContent="right"
                    heightModal="100%"
                    paddingModal="2rem 0.5rem 0rem 0.5rem"
                />
            </Main>
            <Footer />
        </Container>
    );
};
