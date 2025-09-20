import { Footer } from "../components/layout/Footer/Footer.component";
import { HeaderHome } from "../components/layout/HeaderHome/HeaderHome.component";
import { Main } from "../components/layout/Main/Main.component";

import imageCard1 from "./../assets/images/imagem-card1.png";
import imageCard2 from "./../assets/images/image-card2.png";
import { CardHome } from "../components/common/CardHome/CardHome.component";

export const Home = () => {
    return (
        <>
            <HeaderHome />
            <Main gap="3.6875rem">
                <CardHome
                    isHighlighted
                    image={imageCard1}
                    category="Japonesa"
                    title="Hioki Sushi"
                    classification="4.9"
                    description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
                />
                <CardHome
                    isHighlighted={false}
                    image={imageCard2}
                    category="Italiana"
                    title="La Dolce Vita Trattoria"
                    classification="4.6"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                />
                <CardHome
                    isHighlighted={false}
                    image={imageCard2}
                    category="Italiana"
                    title="La Dolce Vita Trattoria"
                    classification="4.6"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                />
                <CardHome
                    isHighlighted={false}
                    image={imageCard2}
                    category="Italiana"
                    title="La Dolce Vita Trattoria"
                    classification="4.6"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                />
                <CardHome
                    isHighlighted={false}
                    image={imageCard2}
                    category="Italiana"
                    title="La Dolce Vita Trattoria"
                    classification="4.6"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                />
                <CardHome
                    isHighlighted={false}
                    image={imageCard2}
                    category="Italiana"
                    title="La Dolce Vita Trattoria"
                    classification="4.6"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                />
            </Main>
            <Footer />
        </>
    );
};
