import styled from "styled-components";

export const Title = styled.h1`
    padding: 10px;
    margin: 10px auto;
    max-width: 800px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 20px auto;
        font-size: 15px;
        text-align: center;
    }
`;