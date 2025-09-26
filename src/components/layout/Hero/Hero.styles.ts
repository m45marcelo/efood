import styled from "styled-components";
import imageHero from "./../../../assets/images/imagem-hero.png";

export const HeroContainer = styled.section`
    height: 17.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${imageHero});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 64rem;
    padding: 1.5rem 0rem 2rem 0rem;
`