import { Footer } from "../components/layout/Footer/Footer.component";
import { HeaderHome } from "../components/layout/HeaderHome/HeaderHome.component";
import { Main } from "../components/layout/Main/Main.component";
import { CardHome } from "../components/common/CardHome/CardHome.component";
import { useEffect, useState } from "react";
import type { Restaurant } from "../types";

export const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    async function buscarDados(){
        try {
            const response = await fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes");
            const data: Restaurant[] = await response.json();
            setRestaurants(data)
        } catch (error) {
            console.error("Erro", error)
        }
    }
    useEffect(() => {
        buscarDados();
    },[])

    return (
        <>
            <HeaderHome />
            <Main gap="48px 80px">
                {
                    restaurants && restaurants.map((restaurant) => (
                        <CardHome 
                        key={restaurant.id}
                        id={restaurant.id}
                        image={restaurant.capa}
                        category={restaurant.tipo}
                        title={restaurant.titulo}
                        classification={restaurant.avaliacao}
                        description={restaurant.descricao}
                        isHighlighted={restaurant.destacado}
                        />
                    ))
                }
            </Main>
            <Footer />
        </>
    );
};
