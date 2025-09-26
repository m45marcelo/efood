import styled from "styled-components";
import vetor from "./../../../assets/images/Vector.png";
export const HeaderContainer = styled.header`
    height: 10.125rem;
    width: 100%;
    background-image: url(${vetor});
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3.625rem;
    width: 100%;
    max-width: 64rem;
    align-items: center;
`