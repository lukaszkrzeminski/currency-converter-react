import styled from "styled-components";
import img from "./img/background.jpg";

export const BackgroundImage = styled.div`
    padding: 50px;
    background-color: ${({ theme }) => theme.color.white};
    background-image: url(${img});
    background-position: 40%;
    background-attachment: scroll;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
        background-position: bottom;
        background-size: cover;
    }
`;