import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border: 1px solid hsl(120, 100%, 30%);
    background-color: hsl(0, 0%, 80%);
`;

export const Legend = styled.legend`
    background-color: hsl(120, 100%, 50%);
    padding: 20px;
    border-radius: 10px;
    border: 2px solid rgb(124, 124, 124);
`;

export const LabelText = styled.span`
    padding: 10px;
    width: 200px;
    max-width: 100%;
    display: inline-block;
`;

export const InputField = styled.input`
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: hsl(120, 100%, 80%);
    border: 2px solid rgb(124, 124, 124);
    max-width: 200px;

    ${({containsValue}) => containsValue && css`
        width: 100%;
    `}
    ${({select}) => select && css`
        width: 100%;
    `}
    ${({final}) => final && css`
        background-color: hsl(260, 100%, 80%);
    `}
`;

export const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: hsl(120, 100%, 20%);
    color: white;
    border-radius: 10px;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }
    &:active {
        background-color: hsl(120, 100%, 40%);
    }
`;