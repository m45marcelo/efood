import { useLocation } from "react-router-dom";
import { CardPerfil } from "../components/common/CardPerfil/CardPerfil.component";
import { Footer } from "../components/layout/Footer/Footer.component";
import { Header } from "../components/layout/Header/Header.component";
import { Hero } from "../components/layout/Hero/Hero.component";
import { Main } from "../components/layout/Main/Main.component";
import { getPageNumber } from "../utils/getPageNumber";
import { useEffect, useState } from "react";
import { type Prato, type Restaurant } from "../types";
import { Modal } from "../components/common/Modal/Modal.component";

export const Perfil = () => {
    const { pathname } = useLocation();
    const pageNumber = Number(getPageNumber(pathname));
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [selectDishe, setSelectDishe] = useState<Prato | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const restaurantMatch: Restaurant | undefined = restaurants.find(
        (restaurant) => restaurant.id == pageNumber
    );

    function handleAddToCart(dishe: Prato){
        setSelectDishe(dishe);
        setModalOpen(true);
    }

    function handleCloseModal(){
        setModalOpen(false);
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
        <>
            <Header />
            {restaurantMatch && (
                <Hero
                    category={restaurantMatch.tipo}
                    title={restaurantMatch.titulo}
                />
            )}

            <Main gap="32px">
                {restaurantMatch &&
                    restaurantMatch.cardapio.map((dishe) => (
                        <>
                            <CardPerfil
                                dishe={dishe}
                                onAddToCart={handleAddToCart}
                            />
                        </>
                    ))}
                    <Modal closeModal={handleCloseModal} dishe={selectDishe} isOpen={modalOpen}/>
            </Main>
            <Footer />
        </>
    );
};
