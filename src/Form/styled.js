import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.darkGreen};
    background-color: ${({ theme }) => theme.color.silver};
    color: ${({ theme }) => theme.color.white};
`;

export const Legend = styled.legend`
    background-color: ${({ theme }) => theme.color.green};
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.grey};
`;

export const LabelText = styled.span`
    padding: 10px;
    width: 200px;
    max-width: 100%;
    display: inline-block;
    color: ${({ theme }) => theme.color.black};
`;

export const InputField = styled.input`
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.mintGreen};
    border: 2px solid ${({ theme }) => theme.color.grey};
    max-width: 200px;
    width: 100%;

    ${({final}) => final && css`
        background-color: ${({ theme }) => theme.color.mauve};
    `}
`;

export const SelectField = styled.select`
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.mintGreen};
    border: 2px solid ${({ theme }) => theme.color.grey};
    max-width: 200px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.darkGreen};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const Description = styled.p`
    
    ${({description}) => description && css`
        text-align: center;
        color: ${({ theme }) => theme.color.white};
    `}
`;