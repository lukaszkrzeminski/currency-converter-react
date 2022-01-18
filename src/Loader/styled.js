import styled from "styled-components";

export const LoaderAnimation = styled.div`
    border: 16px solid ${({ theme }) => theme.color.silver};
    border-top: 16px solid ${({ theme }) => theme.color.mintGreen};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: auto;
    animation: spin 2s linear infinite;

    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;