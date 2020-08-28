import React from 'react';
import { BackgroundImage } from "./styled";

const Background = (props) => (
    <BackgroundImage img={"./img/background.jpg"}>
        {props.children};
    </BackgroundImage>
)

export default Background;