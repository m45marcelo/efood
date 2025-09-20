import styled from "styled-components";
import imageHero from "./../../../assets/images/imagem-hero.png";

export const HeroContainer = styled.section`
    height: 17.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 10.625rem 2rem 10.625rem;
    background-image: url(${imageHero});
    background-position: center;
    background-repeat: no-repeat;
`