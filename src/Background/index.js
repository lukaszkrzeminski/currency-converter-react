import React from 'react';
import { BackgroundImage } from "./styled";

const Background = (props) => (
    <BackgroundImage>
        {props.children};
    </BackgroundImage>
)

export default Background;