import { Footer } from "../components/layout/Footer/Footer.component";
import { HeaderHome } from "../components/layout/HeaderHome/HeaderHome.component";
import { Main } from "../components/layout/Main/Main.component";
import { CardHome } from "../components/common/CardHome/CardHome.component";
import { Container } from "../components/layout/Container/Container.component";
import { Loader } from "../components/common/Loader/Loader.component";
import { useGetRestaurantsQuery } from "../store/api/restaurantsApi";

export const Home = () => {
    const { data: restaurants, isLoading} = useGetRestaurantsQuery();

    return (
        <Container overflow={false}>
            <HeaderHome />
            <Main gap="3rem 5rem">
                {
                    isLoading ? (
                        <Loader/>
                    ):(
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
                    )
                }
            </Main>
            <Footer />
        </Container>
    );
};
