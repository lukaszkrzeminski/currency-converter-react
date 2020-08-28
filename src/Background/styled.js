import styled from "styled-components";

export const BackgroundImage = styled.div`
    padding: 50px;
    background-color: white;
    background-image: url("./img/background.jpg");
    background-position: 40%;
    background-attachment: scroll;
    min-height: 100vh;

    @media (max-width: 767px) {
        padding: 10px;
        background-position: bottom;
        background-size: cover;
    }
`;