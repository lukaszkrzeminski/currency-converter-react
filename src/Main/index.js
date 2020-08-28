import React from 'react';
import { MainDiv } from "./styled";

const Main = (props) => (
    <MainDiv>{props.children};</MainDiv>
)

export default Main;