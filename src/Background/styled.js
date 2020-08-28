import styled from "styled-components";
import img from "./img/background.jpg";

export const BackgroundImage = styled.div`
    padding: 50px;
    background-color: white;
    background-image: url(${img});
    background-position: 40%;
    background-attachment: scroll;
    min-height: 100vh;

    @media (max-width: 767px) {
        padding: 10px;
        background-position: bottom;
        background-size: cover;
    }
`;