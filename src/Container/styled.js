import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    border: solid 1px ${({ theme }) => theme.color.silver};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.pastelGreen};
`;