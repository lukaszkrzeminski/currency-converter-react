import styled from "styled-components";

export const TimerHeader = styled.p`
    text-align: right;
    padding: 10px;
    margin: 0 20px;
    color: ${({ theme }) => theme.color.white};
    font-family: monospace;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 10px;
        font-size: 10px;
    }
`;