import styled from "styled-components";

export const Title = styled.h1`
    padding: 10px;
    margin: 10px auto;
    max-width: 800px;
    color: white;
    background-color: hsl(120, 100%, 50%);
    border-radius: 10px;

    @media (max-width: 767px){
        margin: 20px auto;
        font-size: 15px;
        text-align: center;
    }
`;